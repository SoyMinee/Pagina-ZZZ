const proxies = [
    { name: "ANBY DEMARA", color: "#81ff4b", desc: "Soldado táctico de las Liebres Astutas. Su estilo es eficiente y pragmático.", full: "media/anby_full.png", thumb: "media/anby_thumb.png" },
    { name: "ALICE", color: "#ffd992", desc: "Agente de Spook Shack. Especialista en operaciones de apoyo.", full: "media/alice_full.png", thumb: "media/alice_thumb.png" },
    { name: "ANTHON", color: "#ff4400", desc: "Líder de personal de Belobog. Siempre está a la altura de las circunstancias.", full: "media/anthon_full.png", thumb: "media/anthon_thumb.png" },
    { name: "ARIA", color: "#976bff", desc: "Miembro de Ángeles de la Delusión. Posee una alta afinidad al Éter.", full: "media/aria_full.png", thumb: "media/aria_thumb.png" },
    { name: "ASTRA YAO", color: "#976bff", desc: "Agente de Estrellas de Lyra. Una ídolo con habilidades etéreas únicas.", full: "media/astra_full.png", thumb: "media/astra_thumb.png" },
    { name: "BANGYUE", color: "#ff8a2a", desc: "Agente de Auditoría Krampus. Combatiente eléctrica de gran agilidad.", full: "media/bangyue_full.png", thumb: "media/bangyue_thumb.png" },
    { name: "BEN BIGGER", color: "#ff4400", desc: "Contable de Belobog. Un oso Thiren de gran fuerza y enorme corazón.", full: "media/ben_full.png", thumb: "media/ben_thumb.png" },
    { name: "BILLY KID", color: "#ff0000", desc: "Cyborg de las Liebres Astutas. Un pistolero entusiasta y algo excéntrico.", full: "media/billy_full.png", thumb: "media/billy_thumb.png" },
    { name: "BURNICE WHITE", color: "#ff6831", desc: "Hija de Calidón. Maestra de la mezcla de combustibles y el fuego.", full: "media/burnice_full.png", thumb: "media/burnice_thumb.png" },
    { name: "CAESAR KING", color: "#ffffff", desc: "Líder de los Hijos de Calidón. Defensora firme con un escudo inquebrantable.", full: "media/caesar_full.png", thumb: "media/caesar_thumb.png" },
    { name: "CORIN WICKES", color: "#ffffff", desc: "Sirvienta de Victoria Housekeeping. Maneja su sierra mecánica con suma timidez.", full: "media/corin_full.png", thumb: "media/corin_thumb.png" },
    { name: "DIALYN", color: "#fff56b", desc: "Agente de Auditoría Krampus. Su conocimiento etéreo es su mejor arma.", full: "media/dyalin_full.png", thumb: "media/dyalin_thumb.png" },
    { name: "ELLEN JOE", color: "#b4ebff", desc: "Maid de Victoria Housekeeping. Una tiburón Thiren que odia las horas extra.", full: "media/ellen_full.png", thumb: "media/ellen_thumb.png" },
    { name: "EVELYN", color: "#ff4400", desc: "Miembro de Estrellas de Lyra. Una combatiente ígnea de gran intensidad.", full: "media/evelynn_full.png", thumb: "media/evelynn_thumb.png" },
    { name: "GRACE HOWARD", color: "#ffe7cd", desc: "Ingeniera de Belobog. Siente un amor incondicional por las máquinas.", full: "media/grace_full.png", thumb: "media/grace_thumb.png" },
    { name: "HARUMASA", color: "#71ecff", desc: "Agente de la División N.º 6. Un arquero eléctrico de precisión letal.", full: "media/harumasa_full.png", thumb: "media/harumasa_thumb.png" },
    { name: "JANE DOE", color: "#ffffff", desc: "Agente encubierta de la Unidad de Investigación Criminal. Impredecible y letal.", full: "media/jane_full.png", thumb: "media/jane_thumb.png" },
    { name: "KOLEDA BELOBOG", color: "#ff4400", desc: "Presidenta de Industrias Belobog. Pequeña en estatura, pero de gran autoridad.", full: "media/koleda_full.png", thumb: "media/koleda_thumb.png" },
    { name: "LIGHTER", color: "#ff4400", desc: "El 'campeón' de los Hijos de Calidón. Combatiente ígneo de gran resistencia.", full: "media/lighter_full.png", thumb: "media/lighter_thumb.png" },
    { name: "LUCY", color: "#ff4400", desc: "Miembro de los Hijos de Calidón. Comanda a sus cerdos mecánicos con disciplina.", full: "media/lucy_full.png", thumb: "media/lucy_thumb.png" },
    { name: "LYCAON", color: "#b4ebff", desc: "Mayordomo de Victoria Housekeeping. Un lobo Thiren de modales impecables.", full: "media/lycaon_full.png", thumb: "media/lycaon_thumb.png" },
    { name: "MIYABI", color: "#b4ebff", desc: "Heredera de la familia Hoshimi. Líder de la División N.º 6.", full: "media/miyabi_full.png", thumb: "media/miyabi_thumb.png" },
    { name: "NEKOMATA", color: "#ffd752", desc: "Investigadora Thiren. Ágil, curiosa y extremadamente rápida.", full: "media/nekomata_full.png", thumb: "media/nekomata_thumb.png" },
    { name: "NICOLE DEMARA", color: "#ff6bd0", desc: "Fundadora de las Liebres Astutas. Su astucia supera a la de cualquier liebre.", full: "media/nicole_full.png", thumb: "media/nicole_thumb.png" },
    { name: "PIPER WHEEL", color: "#ffffff", desc: "Conductora de los Hijos de Calidón. Siempre está lista para el próximo viaje.", full: "media/piper_full.png", thumb: "media/piper_thumb.png" },
    { name: "PULCHRA", color: "#f9e231", desc: "Combatiente de los Hijos de Calidón. Posee un estilo de combate físico feroz.", full: "media/pulchra_full.png", thumb: "media/pulchra_thumb.png" },
    { name: "QINGYI", color: "#099e58", desc: "Oficial de Seguridad Pública. Una autómata con una sabiduría antigua.", full: "media/qingyi_full.png", thumb: "media/qingyi_thumb.png" },
    { name: "RINA", color: "#6b6b6b", desc: "Jefa de maids de Victoria Housekeeping. Controla sus muñecas con energía eléctrica.", full: "media/rina_full.png", thumb: "media/rina_thumb.png" },
    { name: "SETH LOWELL", color: "#52707b", desc: "Oficial de Seguridad Pública. Un recluta Thiren con un fuerte sentido del deber.", full: "media/seth_full.png", thumb: "media/seth_thumb.png" },
    { name: "SOLDIER 11", color: "#ff4400", desc: "Soldado del Batallón Óbolos. Una guerrera eficiente que solo vive para la misión.", full: "media/soldier6_full.png", thumb: "media/soldier6_thumb.png" },
    { name: "SOUKAKU", color: "#b4ebff", desc: "Miembro de la División N.º 6. Un Oni azul con un apetito insaciable.", full: "media/soukaku_full.png", thumb: "media/soukaku_thumb.png" },
    { name: "TRIGGER", color: "#2600ff", desc: "Agente del Batallón Óbolos. Especialista en reconocimiento y apoyo eléctrico.", full: "media/trigger_full.png", thumb: "media/trigger_thumb.png" },
    { name: "YANAGI", color: "#00b7ff", desc: "Vice-líder de la División N.º 6. Experta en el manejo de anomalías eléctricas.", full: "media/yanagi_full.png", thumb: "media/yanagi_thumb.png" },
    { name: "ZHU YUAN", color: "#976bff", desc: "Capitana de la Unidad de Respuesta Especial. Una líder ejemplar y disciplinada.", full: "media/zhuyuan_full.png", thumb: "media/zhuyuan_thumb.png" }
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
    const xMove = progress * -80.5; // Ajustado para que se vea el arco derecho
    
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

// Función para actualizar el fondo animado
function updateMarquee(name) {
    const marquee = document.getElementById('marqueeText');
    // Repetimos el nombre varias veces para llenar la línea y permitir el loop infinito
    const content = (name + " ").repeat(10);
    
    marquee.innerHTML = `
        <div class="marquee-line">${content}</div>
        <div class="marquee-line reverse">${content}</div>
        <div class="marquee-line">${content}</div>
        <div class="marquee-line reverse">${content}</div>
        <div class="marquee-line">${content}</div>
    `;
}

// Modificamos tu función changeChar existente
function changeChar(dir) {
    mainImg.style.transform = "translateX(-110%)";
    
    setTimeout(() => {
        currentIdx = (currentIdx + dir + proxies.length) % proxies.length;
        const data = proxies[currentIdx];
        
        document.getElementById('charName').innerText = data.name;
        document.getElementById('charDesc').innerText = data.desc;
        document.documentElement.style.setProperty('--accent', data.color);
        mainImg.src = data.full;

        // ACTUALIZACIÓN: Cambiamos el texto de fondo
        updateMarquee(data.name);

        const prevIdx = (currentIdx - 1 + proxies.length) % proxies.length;
        const nextIdx = (currentIdx + 1) % proxies.length;
        document.getElementById('thumbPrev').src = proxies[prevIdx].thumb;
        document.getElementById('thumbNext').src = proxies[nextIdx].thumb;

        mainImg.style.transform = "translateX(0)";
    }, 300);
}

// Llamar una vez al cargar para el primer personaje
updateMarquee(proxies[0].name);