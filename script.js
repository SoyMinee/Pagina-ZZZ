const proxies = [
    { name: "ANBY DEMARA", color: "#b6ff00", desc: "Soldado táctico. Amante de las hamburguesas.", full: "media/anby_full.png", thumb: "media/anby_thumb.png" },
    { name: "BILLY KID", color: "#ff3e3e", desc: "Cyborg apasionado por los revólveres.", full: "media/billy_full.png", thumb: "media/billy_thumb.png" },
    { name: "NICOLE DEMARA", color: "#ff00ff", desc: "Líder de las Liebres Astutas.", full: "media/nicole_full.png", thumb: "media/nicole_thumb.png" }
];

let currentIdx = 0;
const theO = document.getElementById('theO');
const fadeTexts = document.querySelectorAll('.fade-text');
const uiLayer = document.getElementById('uiLayer');
const mainImg = document.getElementById('mainCharImg');

window.addEventListener('scroll', () => {
    const vh = window.innerHeight;
    const progress = Math.min(window.scrollY / (vh * 1.5), 1);
    
    // 1. Transformar la O
    // Reducimos un poco el xMove para que el borde derecho sea visible
    const scale = 1 + (progress * 70);
    const xMove = progress * -41.5; // Ajustado para que se vea el arco derecho
    
    theO.style.transform = `translateX(${xMove}vw) scale(${scale})`;
    
    if (progress > 0.05) {
        theO.style.backgroundColor = "black";
        
        // Aumentamos ligeramente el grosor relativo del borde (de 4 a 8)
        // para que ese "bordecito" tenga más presencia visual
        const borderThickness = 8 / scale; 
        theO.style.border = `${borderThickness}px solid var(--accent) `;
        
        // Hacemos que el borde solo sea nítido en el lado derecho 
        // (opcional, pero da un toque más limpio)
        theO.style.borderRightWidth = `${12 / scale}px`; 

        fadeTexts.forEach(t => t.style.opacity = 1 - (progress * 4));
    } else {
        theO.style.backgroundColor = "transparent";
        theO.style.border = "0px solid transparent";
        fadeTexts.forEach(t => t.style.opacity = 1);
    }

    // 2. Mostrar UI e imagen
    // Bajamos un poco el umbral para que la transición sea más fluida
    if (progress >= 0.9) {
        uiLayer.style.opacity = 1;
        uiLayer.style.pointerEvents = "all";
        mainImg.style.transform = "translateX(0)";
    } else {
        uiLayer.style.opacity = 0;
        uiLayer.style.pointerEvents = "none";
        mainImg.style.transform = "translateX(-110%)";
    }
});

function changeChar(dir) {
    // Animación de salida rápida por la izquierda
    mainImg.style.transform = "translateX(-110%)";
    
    setTimeout(() => {
        currentIdx = (currentIdx + dir + proxies.length) % proxies.length;
        const data = proxies[currentIdx];
        
        document.getElementById('charName').innerText = data.name;
        document.getElementById('charDesc').innerText = data.desc;
        document.documentElement.style.setProperty('--accent', data.color);
        mainImg.src = data.full;

        // Actualizar miniaturas de los botones
        const prevIdx = (currentIdx - 1 + proxies.length) % proxies.length;
        const nextIdx = (currentIdx + 1) % proxies.length;
        document.getElementById('thumbPrev').src = proxies[prevIdx].thumb;
        document.getElementById('thumbNext').src = proxies[nextIdx].thumb;

        // Animación de entrada
        mainImg.style.transform = "translateX(0)";
    }, 300);
}