
// 2. Función de carga ultra-segura
let proxies = []; 
let discs = []; 
let currentIdx = 0;

// 1. CARGAR PROXIES (Esta funciona bien)
async function cargarProxies() {
    try {
        const res = await fetch('http://localhost:3000/api/proxies');
        if (!res.ok) throw new Error("Error en servidor al pedir proxies");
        proxies = await res.json();
        console.log("PROXIES: Cargados correctamente (" + proxies.length + ")");
        
        // Inicializamos la interfaz de los proxies
        if (proxies.length > 0) {
            initInterface(); 
        }
    } catch (error) {
        console.error("PROXIES: Error crítico al cargar:", error);
    }
}

// 2. CARGAR DISCOS (Separada para que no rompa lo anterior)
async function cargarDiscos() {
    try {
        const res = await fetch('http://localhost:3000/api/discs');
        
        if (!res.ok) {
            console.warn("DISCOS: El servidor respondió con error (404 o 500)");
            return;
        }

        // En lugar de .text() y luego .trim(), vamos directo a .json() 
        // pero capturando el error por si el archivo está mal escrito
        discs = await res.json();
        console.log("DISCOS: Cargados correctamente (" + discs.length + ")");
        
    } catch (error) {
        console.error("DISCOS: El archivo JSON tiene un error de sintaxis (comas, corchetes...):", error);
        discs = []; 
    }
}

// Ejecutamos ambas por separado al cargar la página

// 3. Inicialización de la interfaz (Separada para orden)
function initInterface() {
    // Marquee inicial
    updateMarquee(proxies[0].name);
    
    // Color de acento inicial
    document.documentElement.style.setProperty('--accent', proxies[0].color);
    
    // Imagen principal inicial
    const mainImg = document.getElementById('mainCharImg');
    if (mainImg) mainImg.src = proxies[0].full;

    // Miniaturas iniciales
    const prevIdx = (proxies.length - 1);
    const nextIdx = 1;
    
    const tPrev = document.getElementById('thumbPrev');
    const tNext = document.getElementById('thumbNext');
    
    if (tPrev) tPrev.src = proxies[prevIdx].thumb;
    if (tNext) tNext.src = proxies[nextIdx].thumb;
}

// Arrancar proceso
document.addEventListener('DOMContentLoaded', () => {
    cargarProxies();
    cargarDiscos();
});

// Scripts
const theO = document.getElementById('theO');
const fadeTexts = document.querySelectorAll('.fade-text');
const uiLayer = document.getElementById('uiLayer');
const mainImg = document.getElementById('mainCharImg');

document.querySelector('.login-btn').addEventListener('click', () => {
    window.location.href = 'userpage/userPage.html';
});

// --- LÓGICA DE SCROLL (Mantenida exactamente igual) ---
window.addEventListener('scroll', () => {
    const guiaWrapper = document.getElementById('guiaWrapper');
    const vh = window.innerHeight;
    const progress = Math.min(window.scrollY / (vh * 1.5), 1);
    const scrollPos = window.scrollY;
    const scrollHint = document.getElementById('scrollHint');
    
    if (scrollPos > 50) {
        scrollHint.style.opacity = '0';
        guiaWrapper.classList.add('guia-hidden');
        scrollHint.style.pointerEvents = 'none';
    } else {
        scrollHint.style.opacity = '1';
        scrollHint.style.pointerEvents = 'all';
        guiaWrapper.classList.remove('guia-hidden');
    }
    
    const scale = 1 + (progress * 70);
    const xMove = progress * -84.1;
    theO.style.transform = `translateX(${xMove}vw) scale(${scale})`;
    
    if (progress > 0.05) {
        theO.style.backgroundColor = "black";
        const borderThickness = 8 / scale; 
        theO.style.border = `${borderThickness}px solid var(--accent) `;
        theO.style.borderRightWidth = `${12 / scale}px`; 
        fadeTexts.forEach(t => t.style.opacity = 1 - (progress * 4));
    } else {
        theO.style.backgroundColor = "transparent";
        theO.style.border = "0px solid transparent";
        fadeTexts.forEach(t => t.style.opacity = 1);
    }

    if (progress >= 0.9) {
        uiLayer.style.opacity = 1;
        uiLayer.style.pointerEvents = "all";
        mainImg.style.transform = "translateX(0)";
    } else {
        uiLayer.style.opacity = 0;
        uiLayer.style.pointerEvents = "none";
        mainImg.style.transform = "translateX(-110%)";
    }
    // Detectamos si estamos en la vista móvil que definiste en tu CSS
    const isMobile = window.matchMedia("(max-width: 850px) or (orientation: portrait)").matches;

    if (isMobile) {
        // LÓGICA PARA MÓVIL (Título apilado)
        const scale = 1 + (progress * 35); // Escalado menor para que no se salga de la pantalla
        const xMoveMobile = progress * 13; // Ajusta este valor para moverlo a los lados
        const yMoveMobile = progress * 10; // Como está apilado, igual necesitas que suba un poco en 'vh'
        
        theO.style.transform = `translate(${xMoveMobile}vw, ${yMoveMobile}vh) scale(${scale})`;
    }
});

// --- TUS FUNCIONES (Ahora usan el array 'proxies' cargado) ---

function updateMarquee(name) {
    const marquee = document.getElementById('marqueeText');
    const content = (name + " ").repeat(10);
    marquee.innerHTML = `
        <div class="marquee-line">${content}</div>
        <div class="marquee-line reverse">${content}</div>
        <div class="marquee-line">${content}</div>
        <div class="marquee-line reverse">${content}</div>
        <div class="marquee-line">${content}</div>
        <div class="marquee-line reverse">${content}</div>
        <div class="marquee-line">${content}</div>
    `;
    
}

function changeChar(dir) {
    if (proxies.length === 0) return; // Seguridad
    if(document.getElementById('infoBox').classList.contains('expanded')) {
        backToSummary();
    }
    const isMobile = window.matchMedia("(max-width: 850px) or (orientation: portrait)").matches;

    if (isMobile) {
        mainImg.style.transform = "translateY(110%)";
    } else {
        mainImg.style.transform = "translateX(-110%)";
    }
    
    setTimeout(() => {
        currentIdx = (currentIdx + dir + proxies.length) % proxies.length;
        const data = proxies[currentIdx];
        document.getElementById('charName').innerText = data.name;
        document.getElementById('charDesc').innerText = data.desc;
        document.documentElement.style.setProperty('--accent', data.color);
        mainImg.src = data.full;
        updateMarquee(data.name);
        const prevIdx = (currentIdx - 1 + proxies.length) % proxies.length;
        const nextIdx = (currentIdx + 1) % proxies.length;
        document.getElementById('thumbPrev').src = proxies[prevIdx].thumb;
        document.getElementById('thumbNext').src = proxies[nextIdx].thumb;
        if (isMobile) {
        mainImg.style.transform = "translateY(0%)";
        } else {
            mainImg.style.transform = "translateX(0)";
        } 
    }, 300);
}

const modal = document.getElementById('dataBankModal');
const grid = document.getElementById('agentsGrid');

function showFullList() {
    grid.innerHTML = "";
    proxies.forEach((agent, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.onclick = () => {
            goToAgent(index);
            closeFullList();
        };
        item.innerHTML = `<img src="${agent.thumb}" alt="${agent.name}"><div class="grid-item-name">${agent.name}</div>`;
        grid.appendChild(item);
    });
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';    
}

function closeFullList() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function goToAgent(index) {
    currentIdx = index;
    const data = proxies[currentIdx];
    document.getElementById('charName').innerText = data.name;
    document.getElementById('charDesc').innerText = data.desc;
    document.documentElement.style.setProperty('--accent', data.color);
    mainImg.src = data.full;
    updateMarquee(data.name);
    const prevIdx = (currentIdx - 1 + proxies.length) % proxies.length;
    const nextIdx = (currentIdx + 1) % proxies.length;
    document.getElementById('thumbPrev').src = proxies[prevIdx].thumb;
    document.getElementById('thumbNext').src = proxies[nextIdx].thumb;
}

window.onclick = function(event) { if (event.target == modal) closeFullList(); }

function selectAgent() { 
    const infoBox = document.getElementById('infoBox');
    const data = proxies[currentIdx];
    const path4pc = "media/discos/"+discs[data.sets[0]].disc+".webp"; 
    const path2pc = "media/discos/"+discs[data.sets[1]].disc+".webp"; 
    
    document.getElementById('charRole').innerText = data.role || "TBD";
    document.getElementById('webtitle').innerText= "Zenless Logic | "+data.name;
    infoBox.classList.add('expanded');
    document.getElementById('4pc').src = path4pc;
    document.getElementById('2pc').src = path2pc;
    document.getElementById('mc').src = data.thumb;
    document.getElementById('mc2').src = data.thumb;
    document.getElementById('tm1').src = proxies[data.team[0]].thumb;
    document.getElementById('tm2').src = proxies[data.team[1]].thumb;
    document.getElementById('tm3').src = proxies[data.team[2]].thumb;
    document.getElementById('tm4').src = proxies[data.team[3]].thumb;
    uiLayer.classList.add('agent-selected');
    document.body.style.overflow = 'hidden';

    const skillsContainer = document.querySelector('.skills-priority');
    skillsContainer.innerHTML = ""; 
    if (data.skillOrder) {
        data.skillOrder.forEach((skill, index) => {
            const slot = document.createElement('div');
            slot.className = 'skill-slot';
            const skillNames = { 'L': 'Pasiva', 'H': 'Habilidad Special', 'B': 'Básicos', 'D': 'Definitiva (Ulti)' };
            slot.title = skillNames[skill];
            const skillFiles = { 'L': 'letras.webp', 'H': 'special.webp', 'B': 'basicos.webp', 'D': 'ulti.webp' };
            const img = document.createElement('img');
            img.src = `media/ico/${skillFiles[skill]}`;
            img.alt = skillNames[skill];
            slot.appendChild(img);
            skillsContainer.appendChild(slot);
            if (index < data.skillOrder.length - 1) {
                const arrow = document.createElement('span');
                arrow.className = 'skill-arrow';
                arrow.innerText = ">";
                skillsContainer.appendChild(arrow);
            }
        });
    }
}

function backToSummary() {
    const infoBox = document.getElementById('infoBox');
    document.getElementById('webtitle').innerText= "Zenless Logic";
    infoBox.classList.remove('expanded');
    uiLayer.classList.remove('agent-selected');
    document.body.style.overflow = 'auto';
}