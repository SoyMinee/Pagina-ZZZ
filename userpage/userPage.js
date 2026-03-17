document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const card = document.getElementById('mainCard');
    const toggleBtn = document.getElementById('toggleAuth');
    const nameGroup = document.getElementById('nameGroup');
    const authTitle = document.getElementById('auth-title');
    const submitBtn = document.getElementById('submitBtn');
    
    let isRegisterMode = false;

    // 1. Cambiar entre Login y Registro
    toggleBtn.addEventListener('click', () => {
        isRegisterMode = !isRegisterMode;
        nameGroup.style.display = isRegisterMode ? 'block' : 'none';
        authTitle.innerText = isRegisterMode ? 'REG_TERMINAL' : 'USER_AUTH';
        submitBtn.innerText = isRegisterMode ? 'Create_Proxy_Account' : 'Initialize_Session';
        toggleBtn.innerText = isRegisterMode ? '[ ALREADY_REGISTERED? LOGIN ]' : '[ NEW_PROXY? REGISTER_HERE ]';
        resetErrors();
    });

    // 2. Manejar Envío
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInp = document.getElementById('userInput');
        const passInp = document.getElementById('passInput');
        const nameInp = document.getElementById('nameInput');
        
        const userVal = userInp.value.trim();
        const passVal = passInp.value.trim();
        const displayVal = nameInp.value.trim();
        
        let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        if (isRegisterMode) {
            // REGISTRO
            if (!userVal) return showError("ERROR: PROXY_ID_REQUIRED", userInp);
            if (!passVal) return showError("ERROR: PASS_KEY_REQUIRED", passInp);
            if (users.find(u => u.username.toLowerCase() === userVal.toLowerCase())) {
                return showError("ERROR: ID_ALREADY_EXISTS", userInp);
            }

            users.push({ username: userVal, password: passVal, displayName: displayVal || userVal });
            localStorage.setItem('registeredUsers', JSON.stringify(users));
            showSystemNotification("PROXY REGISTRADO");
            toggleBtn.click();
        } else {
            // LOGIN MEJORADO
            const foundUser = users.find(u => u.username.toLowerCase() === userVal.toLowerCase());

            if (!foundUser) {
                showError("ERROR: PROXY_ID_NOT_FOUND", userInp);
            } else if (foundUser.password !== passVal) {
                showError("ERROR: INVALID_PASS_KEY", passInp);
            } else {
                startLoginSequence(foundUser.displayName);
            }
        }
    });

    function showSystemNotification(message) {
    const noti = document.getElementById('system-notification');
    const notiText = document.getElementById('noti-text');
    
    notiText.innerText = message;
    noti.classList.remove('notification-hidden');
    
    // Desvanecer después de 3 segundos
    setTimeout(() => {
        noti.classList.add('notification-hidden');
    }, 3000);
    }

    function showError(msg, input) {
        resetErrors();
        const consoleErr = document.getElementById('error-console');
        document.getElementById('error-text').innerText = msg;
        input.classList.add('invalid');
        consoleErr.style.display = 'block';
        input.focus();
    }

    function resetErrors() {
        document.querySelectorAll('.input-group input').forEach(i => i.classList.remove('invalid'));
        document.getElementById('error-console').style.display = 'none';
    }

    function startLoginSequence(name) {
        submitBtn.innerText = "INITIALIZING...";
        card.classList.add('collapsed');

        setTimeout(() => {
            card.style.display = 'none';
            document.getElementById('connecting-screen').style.display = 'block';

            setTimeout(() => {
                document.getElementById('connecting-screen').style.display = 'none';
                
                // Rellenamos el perfil que ya existe en el HTML
                document.getElementById('p-name').innerText = `PROXY_DOSSIER: ${name.toUpperCase()}`;
                document.getElementById('profile-view').style.display = 'flex';
            }, 2000);
        }, 600);
    }
});