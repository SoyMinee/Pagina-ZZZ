// 1. VARIABLES GLOBALES: Fuera de todo para que todas las funciones las vean
let currentUser = null; 
let proxies = [];      

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const card = document.getElementById('mainCard');
    const toggleBtn = document.getElementById('toggleAuth');
    const nameGroup = document.getElementById('nameGroup');
    const authTitle = document.getElementById('auth-title');
    const submitBtn = document.getElementById('submitBtn');
    
    // CARGA DE AGENTES: Traer los personajes del servidor al inicio
    fetch('http://localhost:3000/api/proxies')
        .then(res => res.json())
        .then(data => { 
            proxies = data; 
            console.log("Base de datos de agentes cargada:", proxies.length);
        })
        .catch(err => console.error("Error cargando agentes:", err));
    
    let isRegisterMode = false;

    toggleBtn.addEventListener('click', () => {
        isRegisterMode = !isRegisterMode;
        nameGroup.style.display = isRegisterMode ? 'block' : 'none';
        authTitle.innerText = isRegisterMode ? 'REG_TERMINAL' : 'USER_AUTH';
        submitBtn.innerText = isRegisterMode ? 'Create_Proxy_Account' : 'Initialize_Session';
        toggleBtn.innerText = isRegisterMode ? '[ ALREADY_REGISTERED? LOGIN ]' : '[ NEW_PROXY? REGISTER_HERE ]';
        resetErrors();
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userInp = document.getElementById('userInput');
        const passInp = document.getElementById('passInput');
        const nameInp = document.getElementById('nameInput');
        
        const userVal = userInp.value.trim();
        const passVal = passInp.value.trim();
        const displayVal = nameInp.value.trim();

        try {
            const res = await fetch('http://localhost:3000/api/users');
            const users = await res.json();

            if (isRegisterMode) {
                if (!userVal) return showError("ERROR: PROXY_ID_REQUIRED", userInp);
                if (!passVal) return showError("ERROR: PASS_KEY_REQUIRED", passInp);
                if (users.find(u => u.username.toLowerCase() === userVal.toLowerCase())) {
                    return showError("ERROR: ID_ALREADY_EXISTS", userInp);
                }

                // Registro con valores por defecto para evitar errores de imagen
                const newUser = { 
                    username: userVal, 
                    password: passVal, 
                    displayName: displayVal || userVal,
                    thumb: "media/anby_thumb.png",
                    full: "media/anby_full.png",
                    color: "#bce146"
                };

                const saveRes = await fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                });

                if (saveRes.ok) {
                    showSystemNotification("PROXY REGISTRADO EN DATABASE");
                    toggleBtn.click();
                }

            } else {
                const foundUser = users.find(u => u.username.toLowerCase() === userVal.toLowerCase());

                if (!foundUser) {
                    showError("ERROR: PROXY_ID_NOT_FOUND", userInp);
                } else if (foundUser.password !== passVal) {
                    showError("ERROR: INVALID_PASS_KEY", passInp);
                } else {
                    currentUser = foundUser; // GUARDAMOS EL USUARIO GLOBALMENTE
                    startLoginSequence(foundUser);
                }
            }
        } catch (err) {
            showError("ERROR: SERVER_OFFLINE", userInp);
        }
    });

    function startLoginSequence(user) {
        submitBtn.innerText = "INITIALIZING...";
        card.classList.add('collapsed');
        setTimeout(() => {
            card.style.display = 'none';
            document.getElementById('connecting-screen').style.display = 'block';
            
            // Aplicamos los datos guardados del usuario al entrar
            document.getElementById('p-name').innerText = `PROXY_DOSSIER: ${user.displayName.toUpperCase()}`;
            document.getElementById('p-img').src = `../${user.thumb || 'media/anby_thumb.png'}`;
            document.documentElement.style.setProperty('--accent', user.color || '#bce146');

            setTimeout(() => {
                document.getElementById('connecting-screen').style.display = 'none';
                document.getElementById('profile-view').style.display = 'flex';
            }, 2000);
        }, 600);
    }

    // Funciones auxiliares internas
    window.showSystemNotification = function(message) {
        const noti = document.getElementById('system-notification');
        const notiText = document.getElementById('noti-text');
        notiText.innerText = message;
        noti.classList.remove('notification-hidden');
        setTimeout(() => noti.classList.add('notification-hidden'), 3000);
    };

    function showError(msg, input) {
        resetErrors();
        document.getElementById('error-text').innerText = msg;
        input.classList.add('invalid');
        document.getElementById('error-console').style.display = 'block';
    }

    function resetErrors() {
        document.querySelectorAll('.input-group input').forEach(i => i.classList.remove('invalid'));
        document.getElementById('error-console').style.display = 'none';
    }
});

// --- FUNCIONES GLOBALES (FUERA DEL DOMCONTENTLOADED PARA EL HTML) ---

window.openAvatarSelector = function() {
    const modal = document.getElementById('dataBankModal');
    const grid = document.getElementById('agentsGrid');
    
    if (modal && grid) {
        modal.style.display = 'flex';
        grid.innerHTML = ""; 

        proxies.forEach(agent => {
            const item = document.createElement('div');
            item.className = 'grid-item';
            
            item.onclick = () => {
                window.updateAvatar(agent.thumb, agent.full, agent.color);
                window.closeFullList();
            };

            item.innerHTML = `
                <img src="../${agent.thumb}" alt="${agent.name}">
                <div class="grid-item-name">${agent.name}</div>
            `;
            grid.appendChild(item);
        });
    }
};

window.closeFullList = () => {
    document.getElementById('dataBankModal').style.display = 'none';
};

window.updateAvatar = async function(thumbPath, fullPath, accentColor) {
    if (!currentUser) {
        console.error("No hay sesión de usuario activa");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/users/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: currentUser.username,
                updates: { 
                    thumb: thumbPath, 
                    full: fullPath, 
                    color: accentColor 
                }
            })
        });

        if (response.ok) {
            // 1. Actualizar Interfaz
            document.getElementById('p-img').src = `../${thumbPath}`;
            document.documentElement.style.setProperty('--accent', accentColor);

            // 2. Actualizar objeto local para que sea persistente en la sesión
            currentUser.thumb = thumbPath;
            currentUser.color = accentColor;

            window.showSystemNotification("DATA_SYNCHRONIZED");
        }
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
    }
};