
const CHARACTERS = [
    {
        name: "ANBY DEMARA",
        faction: "CUNNING HARES",
        color: "#a4ff00",
        description: "Una joven tranquila con un estilo de combate excepcionalmente eficiente. Le encantan las hamburguesas y las películas de serie B. Su manejo de la espada es quirúrgico.",
        image: "https://file-zzz.hoyoverse.com/mihoyo/zzz/main/character/anby/stand.png" 
    },
    {
        name: "BILLY KID",
        faction: "CUNNING HARES",
        color: "#ff3e3e",
        description: "Un cyborg entusiasta y despreocupado. Es un fanático absoluto de los 'Starlight Knights'. Sus pistolas duales nunca fallan un tiro mientras bromea.",
        image: "https://file-zzz.hoyoverse.com/mihoyo/zzz/main/character/billy/stand.png"
    },
    {
        name: "NICOLE DEMARA",
        faction: "CUNNING HARES",
        color: "#ff69b4",
        description: "Líder de las Liebres Astutas. Su astucia para los negocios solo es superada por su habilidad para meterse en problemas financieros y resolverlos con su maletín-cañón.",
        image: "https://file-zzz.hoyoverse.com/mihoyo/zzz/main/character/nicole/stand.png"
    }
];

const scrollContainer = document.querySelector('.scroll-container');
const portalO = document.querySelector('.portal-o');
const heroSubtitle = document.querySelector('.hero-subtitle');
const showcase = document.querySelector('.main-container');

// LÓGICA DE TRANSICIÓN DE SCROLL
scrollContainer.addEventListener('scroll', () => {
    const scrollY = scrollContainer.scrollTop;
    const vh = window.innerHeight;
    
    // Calculamos el progreso durante el scroll de la primera sección (1.2vh para más suavidad)
    const progress = Math.min(scrollY / (vh * 1.2), 1);

    // Escalado masivo para que la 'O' se convierta en la pared de color
    // Usamos un factor de escala alto para cubrir pantallas anchas
    const scale = 1 + (progress * 130);
    portalO.style.transform = `scale(${scale})`;

    // Cambio a color sólido y eliminación de stroke
    if (progress > 0.1) {
        portalO.style.color = 'var(--accent-color)';
        portalO.style.webkitTextStroke = '0px transparent';
    } else {
        portalO.style.color = 'transparent';
        portalO.style.webkitTextStroke = '0.15rem var(--accent-color)';
    }

    // Desvanecer textos del hero
    heroSubtitle.style.opacity = Math.max(0, 1 - (progress * 4));

    // Revelar la siguiente sección cuando la O está cerca de cubrirlo todo
    if (progress > 0.85) {
        showcase.classList.add('reveal');
    } else {
        showcase.classList.remove('reveal');
    }
});

// LÓGICA DEL SELECTOR DE PERSONAJES
const selector = document.getElementById('char-selector');
const charImg = document.getElementById('char-img');
const charName = document.getElementById('char-name');
const charFaction = document.getElementById('char-faction');
const charDesc = document.getElementById('char-desc');
const bgText = document.getElementById('bg-text');

function updateCharacter(index) {
    const char = CHARACTERS[index];
    
    // Animación de salida
    charImg.style.opacity = "0";
    charImg.style.transform = "scale(0.9) translateX(2rem)";

    setTimeout(() => {
        // Actualizar variables de CSS y contenido
        document.documentElement.style.setProperty('--accent-color', char.color);
        charImg.src = char.image;
        charName.innerText = char.name;
        charFaction.innerText = char.faction;
        charDesc.innerText = char.description;
        bgText.innerText = char.name.split(' ')[0];
        
        // Animación de entrada
        charImg.style.opacity = "1";
        charImg.style.transform = "scale(1) translateX(0)";

        // Actualizar botones
        document.querySelectorAll('.char-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }, 300);
}

// Crear botones de navegación
CHARACTERS.forEach((char, index) => {
    const btn = document.createElement('button');
    btn.className = `char-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = char.name;
    btn.onclick = () => updateCharacter(index);
    selector.appendChild(btn);
});

// Inicializar primer personaje
updateCharacter(0);

// Ajuste de escala al redimensionar ventana
window.addEventListener('resize', () => {
    scrollContainer.dispatchEvent(new Event('scroll'));
});
