const proxies = [
    { name: "ANBY DEMARA", color: "#b6ff00", type: "ELECTRIC", desc: "Fría, eficiente y amante de las hamburguesas. Soldado táctico de las Liebres Astutas." },
    { name: "BILLY KID", color: "#ff3e3e", type: "FIRE", desc: "Cyborg apasionado por los shows de TV clásicos y sus revólveres 'Niñas'." },
    { name: "NICOLE DEMARA", color: "#ff00ff", type: "ETHER", desc: "Fundadora de las Liebres Astutas. Su astucia solo es superada por sus deudas." }
];

let currentProxy = 0;
const theO = document.getElementById('theO');
const fadeTexts = document.querySelectorAll('.fade-text');
const uiLayer = document.getElementById('uiLayer');

window.addEventListener('scroll', () => {
    // Progreso del 0 al 1
    const progress = Math.min(window.scrollY / (window.innerHeight * 1.5), 1);
    
    // 1. Efecto de Transformación
    const scale = 1 + (progress * 65); // Escala masiva
    const xMove = progress * -45;     // Se desplaza a la izquierda (disco lateral)
    
    theO.style.transform = `translateX(${xMove}vw) scale(${scale})`;
    
    // 2. La O actúa como máscara y disco
    if (progress > 0.05) {
        // Añadimos borde para que parezca un disco sólido
        theO.style.border = `${2 / scale}px solid var(--accent)`;
        // El fondo negro de la O tapa lo que hay detrás
        theO.style.backgroundColor = `rgba(0,0,0,${progress})`;
        
        // Desvanecemos el resto del texto
        fadeTexts.forEach(el => {
            el.style.opacity = 1 - (progress * 4);
            el.style.transform = `scale(${1 - progress})`;
        });
    } else {
        theO.style.border = "none";
        theO.style.backgroundColor = "transparent";
        fadeTexts.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = `scale(1)`;
        });
    }

    // 3. Activar UI Final
    if (progress >= 1) {
        uiLayer.style.opacity = 1;
        uiLayer.style.pointerEvents = "all";
    } else {
        uiLayer.style.opacity = 0;
        uiLayer.style.pointerEvents = "none";
    }
});

function changeChar(dir) {
    currentProxy = (currentProxy + dir + proxies.length) % proxies.length;
    const data = proxies[currentProxy];

    document.getElementById('charName').innerText = data.name;
    document.getElementById('charDesc').innerText = data.desc;
    document.getElementById('charType').innerText = data.type;
    document.documentElement.style.setProperty('--accent', data.color);
}