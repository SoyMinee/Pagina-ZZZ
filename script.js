
const proxies = [
    { name: "ANBY DEMARA",  role: "STUNNER", team:[32,1,24,8],sets:[17,19],skillOrder:['L','H','D','B'], color: "#bce146", desc: "Soldado táctico de las Liebres Astutas. Su estilo es eficiente y pragmático.", full: "media/anby_full.png", thumb: "media/anby_thumb.png" },
    { name: "NICOLE DEMARA",role: "SUPPORT", team:[32,1,24,8],sets:[18,20],skillOrder:[], color: "#fe407f", desc: "Fundadora de las Liebres Astutas. Su astucia supera a la de cualquier liebre.", full: "media/nicole_full.png", thumb: "media/nicole_thumb.png" },
    { name: "BILLY KID",    role: "DPS", team:[32,1,24,8],sets:[18,20],skillOrder:[], color: "#ff0000", desc: "Cyborg de las Liebres Astutas. Un pistolero entusiasta y algo excéntrico.", full: "media/billy_full.png", thumb: "media/billy_thumb.png" },
    { name: "NEKOMATA",     role: "DPS", team:[32,1,24,8],sets:[18,20],skillOrder:[], color: "#ffd752", desc: "Investigadora Thiren. Ágil, curiosa y extremadamente rápida.", full: "media/nekomata_full.png", thumb: "media/nekomata_thumb.png" },
    
    { name: "ANTHON",        role: "DPS/SUB-DPS", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff4400", desc: "Líder de personal de Belobog. Siempre está a la altura de las circunstancias.", full: "media/anthon_full.png", thumb: "media/anthon_thumb.png" },
    { name: "BEN BIGGER",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#b8816d", desc: "Contable de Belobog. Un oso Thiren de gran fuerza y enorme corazón.", full: "media/ben_full.png", thumb: "media/ben_thumb.png" },
    { name: "GRACE HOWARD",  role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#daffa9", desc: "Ingeniera de Belobog. Siente un amor incondicional por las máquinas.", full: "media/grace_full.png", thumb: "media/grace_thumb.png" },
    { name: "KOLEDA BELOBOG",role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff4400", desc: "Presidenta de Industrias Belobog. Pequeña en estatura, pero de gran autoridad.", full: "media/koleda_full.png", thumb: "media/koleda_thumb.png" },

    { name: "RINA",         role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#6b6b6b", desc: "Jefa de maids de Victoria Housekeeping. Controla sus muñecas con energía eléctrica.", full: "media/rina_full.png", thumb: "media/rina_thumb.png" },
    { name: "CORIN WICKES", role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ffffff", desc: "Sirvienta de Victoria Housekeeping. Maneja su sierra mecánica con suma timidez.", full: "media/corin_full.png", thumb: "media/corin_thumb.png" },
    { name: "ELLEN JOE",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#127ca2", desc: "Maid de Victoria Housekeeping. Una tiburón Thiren que odia las horas extra.", full: "media/ellen_full.png", thumb: "media/ellen_thumb.png" },
    { name: "LYCAON",       role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#b4ebff", desc: "Mayordomo de Victoria Housekeeping. Un lobo Thiren de modales impecables.", full: "media/lycaon_full.png", thumb: "media/lycaon_thumb.png" },

    { name: "PIPER WHEEL",  role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#feffae", desc: "Conductora de los Hijos de Calidón. Siempre está lista para el próximo viaje.", full: "media/piper_full.png", thumb: "media/piper_thumb.png" },
    { name: "PULCHRA",      role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#f9e231", desc: "Combatiente de los Hijos de Calidón. Posee un estilo de combate físico feroz.", full: "media/pulchra_full.png", thumb: "media/pulchra_thumb.png" },
    { name: "CAESAR KING",  role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ffffff", desc: "Líder de los Hijos de Calidón. Defensora firme con un escudo inquebrantable.", full: "media/caesar_full.png", thumb: "media/caesar_thumb.png" },
    { name: "BURNICE WHITE",role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff6831", desc: "Hija de Calidón. Maestra de la mezcla de combustibles y el fuego.", full: "media/burnice_full.png", thumb: "media/burnice_thumb.png" },
    { name: "LUCY",         role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#c70000", desc: "Miembro de los Hijos de Calidón. Comanda a sus cerdos mecánicos con disciplina.", full: "media/lucy_full.png", thumb: "media/lucy_thumb.png" },
    { name: "LIGHTER",      role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff0000", desc: "El 'campeón' de los Hijos de Calidón. Combatiente ígneo de gran resistencia.", full: "media/lighter_full.png", thumb: "media/lighter_thumb.png" },

    { name: "ASTRA YAO",role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#976bff", desc: "Agente de Estrellas de Lyra. Una ídolo con habilidades etéreas únicas.", full: "media/astra_full.png", thumb: "media/astra_thumb.png" },
    { name: "EVELYN",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff4400", desc: "Miembro de Estrellas de Lyra. Una combatiente ígnea de gran intensidad.", full: "media/evelynn_full.png", thumb: "media/evelynn_thumb.png" },
    
    { name: "ZHU YUAN",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#976bff", desc: "Capitana de la Unidad de Respuesta Especial. Una líder ejemplar y disciplinada.", full: "media/zhuyuan_full.png", thumb: "media/zhuyuan_thumb.png" },
    { name: "SETH LOWELL", role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#52707b", desc: "Oficial de Seguridad Pública. Un recluta Thiren con un fuerte sentido del deber.", full: "media/seth_full.png", thumb: "media/seth_thumb.png" },
    { name: "QINGYI",      role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#099e58", desc: "Oficial de Seguridad Pública. Una autómata con una sabiduría antigua.", full: "media/qingyi_full.png", thumb: "media/qingyi_thumb.png" },
    { name: "JANE DOE",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ffffff", desc: "Agente encubierta de la Unidad de Investigación Criminal. Impredecible y letal.", full: "media/jane_full.png", thumb: "media/jane_thumb.png" },
    
    { name: "HARUMASA", role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#5552ff", desc: "Agente de la División N.º 6. Un arquero eléctrico de precisión letal.", full: "media/harumasa_full.png", thumb: "media/harumasa_thumb.png" },
    { name: "MIYABI",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#b4ebff", desc: "Heredera de la familia Hoshimi. Líder de la División N.º 6.", full: "media/miyabi_full.png", thumb: "media/miyabi_thumb.png" },
    { name: "SOUKAKU",  role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#009dff", desc: "Miembro de la División N.º 6. Un Oni azul con un apetito insaciable.", full: "media/soukaku_full.png", thumb: "media/soukaku_thumb.png" },
    { name: "YANAGI",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#89d5f3", desc: "Vice-líder de la División N.º 6. Experta en el manejo de anomalías eléctricas.", full: "media/yanagi_full.png", thumb: "media/yanagi_thumb.png" },

    { name: "SOLDIER 11",       role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff4400", desc: "Soldado del Batallón Óbolos. Una guerrera eficiente que solo vive para la misión.", full: "media/soldier6_full.png", thumb: "media/soldier6_thumb.png" },
    { name: "TRIGGER",          role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#2600ff", desc: "Agente del Batallón Óbolos. Especialista en reconocimiento y apoyo eléctrico.", full: "media/trigger_full.png", thumb: "media/trigger_thumb.png" },
    { name: "SEED",             role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ffffff", desc: "Los proxies son como... espíritus afines. Igual que los tréboles de cuatro hojas o las flores de canola.", full: "media/seed_full.png", thumb: "media/seed_thumb.png"},
    { name: "ORPHIE & MAGUS",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff4400", desc: "La capitana sabe muy bien lo que hace. La agitación emocional nunca nubla su puntería.", full: "media/orphie_full.png", thumb: "media/orphie_thumb.png"},

    { name: "SILVER SOLDIER ANBY", role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#fff200", desc: "Anby, tanto de su día a día como de sus combates.", full: "media/sanby_full.png", thumb: "media/sanby_thumb.png"},

    { name: "VIVIAN BANSHEE",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#b4009f", desc: "Vivian es miembro de Ruiseñor. Es experta en reunir informes de todo tipo y dispone de habilidades muy variadas", full: "media/vivian_full.png", thumb: "media/vivian_thumb.png"},
    { name: "HUGO VLAD",        role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#6ec8ff", desc: "Es el líder de Ruiseñor, la organización de ladrones de arte. ", full: "media/hugo_full.png", thumb: "media/hugo_thumb.png"},

    { name: "PAN YINHU",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#fbff00", desc: "¡Incluso las plantas saben que deben alimentarse de la tierra y beber rocío, así que no hay manera que podamos practicar con el estómago vacío!", full: "media/panda_full.png", thumb: "media/panda_thumb.png"},
    { name: "YIXUAN",       role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#e1b46c", desc: "Gran maestra del templo Yunkui", full: "media/yixuan_full.png", thumb: "media/yixuan_thumb.png"},
    { name: "JU FUFU",      role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff9500", desc: "¡Tigres feroces merodean por la Cima Yunkui, donde los héroes justos muestran su poder!", full: "media/fufu_full.png", thumb: "media/fufu_thumb.png"},
    
    { name: "ALICE",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ffd992", desc: "Agente de Spook Shack. Obsesa de la simetría y perfección.", full: "media/alice_full.png", thumb: "media/alice_thumb.png" },
    { name: "YUZUHA",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff3b3b", desc: "«¿Crees que tienes mala suerte? ¿Quieres que te dé un consejo?»", full: "media/yuzuha_full.png", thumb: "media/yuzuha_thumb.png"},
    { name: "LUCÍA",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#63e2fc", desc: "Lucía, uno de los miembros de la Cabaña del Terror, es conocida en línea como «Emisaria Nocturna». ", full: "media/lucia_full.png", thumb: "media/lucia_thumb.png"},
    { name: "MANATO",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#f40505", desc: "«Si hay algún problema, ponte detrás de mí.»", full: "media/manato_full.png", thumb: "media/manato_thumb.png"},
    { name: "YIDHARI",  role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#9e0673", desc: "«Ojalá ninguna historia tuviera final, así tendría el valor de seguir pasando las páginas eternamente.»", full: "media/yidhari_full.png", thumb: "media/yidhari_thumb.png"},

    { name: "BANGYUE",  role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff8a2a", desc: "Agente de Auditoría Krampus. Combatiente eléctrica de gran agilidad.", full: "media/bangyue_full.png", thumb: "media/bangyue_thumb.png" },
    { name: "DIALYN",   role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#fff56b", desc: "Agente de Auditoría Krampus. Su conocimiento etéreo es su mejor arma.", full: "media/dyalin_full.png", thumb: "media/dyalin_thumb.png" },
    { name: "ZHAO",     role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff8adc", desc: "«Ya que has venido, ¿qué tal si hacemos un trato?»", full: "media/zhao_full.png", thumb: "media/zhao_thumb.png"},

    { name: "ARIA",     role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#976bff", desc: "Miembro de Ángeles de la Delusión. Posee una alta afinidad al Éter.", full: "media/aria_full.png", thumb: "media/aria_thumb.png" },
    { name: "SUNNA",    role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#36ff8d", desc: "«¡Aaah! Estoy tan nerviosa... Ojalá pudiera... ¡hacer desaparecer a toda la audiencia!»", full: "media/sunna_full.png", thumb: "media/sunna_thumb.png"},
    { name: "NAGONG YU",role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color: "#ff5ef7", desc: "Miembro de los Ángeles de la Delusión", full: "media/nao_full.png", thumb: "media/nao_thumb.png"},

    { name: "CISSIA", role: "STUNNER", team:[32,1,2,8],sets:[1,2],skillOrder:[], color:"#9f37e9", desc: "«Yo solo entiendo de una cosa: si algo me gusta, le hinco los dientes y no lo dejo marchar.»", full: "media/cissia_full.png", thumb: "media/cissia_thumb.png"}
    
];

const discs = [
    { disc: "astral_voice"},        //0
    { disc: "branch_blade"},        //1
    { disc: "chaos_jazz"},          //2
    { disc: "chaotic_metal"},       //3
    { disc: "dawns_bloom"},         //4
    { disc: "fanged_metal"},        //5
    { disc: "freedom_blues"},       //6
    { disc: "hormone_punk"},        //7
    { disc: "infierno_metal"},      //8
    { disc: "king_summit"},         //9
    { disc: "moonlight_lullaby"},   //10
    { disc: "phaetons_melody"},     //11
    { disc: "polar_metal"},         //12
    { disc: "proto_punk"},          //13
    { disc: "puffer_electro"},      //14
    { disc: "shadow_harmony"},      //15
    { disc: "shining_aria"},        //16
    { disc: "shockstar_disco"},     //17
    { disc: "soul_rock"},           //18
    { disc: "swing_jazz"},          //19
    { disc: "thunder_metal"},       //20
    { disc: "white_water_ballad"},  //21
    { disc: "woodpecker_electro"},  //22
    { disc: "yunkui_tales"},        //23

]

let currentIdx = 0;
const theO = document.getElementById('theO');
const fadeTexts = document.querySelectorAll('.fade-text');
const uiLayer = document.getElementById('uiLayer');
const mainImg = document.getElementById('mainCharImg');

document.querySelector('.login-btn').addEventListener('click', () => {
    window.location.href = 'userpage/userPage.html';
});



window.addEventListener('scroll', () => {
    const vh = window.innerHeight;
    const progress = Math.min(window.scrollY / (vh * 1.5), 1);
    const scrollPos = window.scrollY;
    const scrollHint = document.getElementById('scrollHint');
    
    // Si el usuario ha bajado más de 50px, ocultamos el aviso
    if (scrollPos > 50) {
        scrollHint.style.opacity = '0';
        scrollHint.style.pointerEvents = 'none';
    } else {
        scrollHint.style.opacity = '1';
        scrollHint.style.pointerEvents = 'all';
    }
    
    // 1. Transformar la O
    // Reducimos un poco el xMove para que el borde derecho sea visible
    const scale = 1 + (progress * 70);
    const xMove = progress * -84.1; // Ajustado para que se vea el arco derecho
    
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

// Nombre agente bucle
function updateMarquee(name) {
    const marquee = document.getElementById('marqueeText');
    // Repetimos
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

//Animacion fotos full
function changeChar(dir) {
    if(document.getElementById('infoBox').classList.contains('expanded')) {
        backToSummary();
    }
    
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

const modal = document.getElementById('dataBankModal');
const grid = document.getElementById('agentsGrid');

function showFullList() {
    // 1. Limpiar el grid antes de llenarlo
    grid.innerHTML = "";

    // 2. Generar miniaturas de todos los proxies
    proxies.forEach((agent, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.onclick = () => {
            goToAgent(index);
            closeFullList();
        };

        item.innerHTML = `
            <img src="${agent.thumb}" alt="${agent.name}">
            <div class="grid-item-name">${agent.name}</div>
        `;
        grid.appendChild(item);
    });

    // 3. Mostrar el modal con una transición suave
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';    
}

function closeFullList() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para saltar a un agente específico
function goToAgent(index) {
    currentIdx = index;
    const data = proxies[currentIdx];
    
    // Aplicar cambios
    document.getElementById('charName').innerText = data.name;
    document.getElementById('charDesc').innerText = data.desc;
    document.documentElement.style.setProperty('--accent', data.color);
    mainImg.src = data.full;
    updateMarquee(data.name);

    // Actualizar nav
    const prevIdx = (currentIdx - 1 + proxies.length) % proxies.length;
    const nextIdx = (currentIdx + 1) % proxies.length;
    document.getElementById('thumbPrev').src = proxies[prevIdx].thumb;
    document.getElementById('thumbNext').src = proxies[nextIdx].thumb;
}

// Cerrar modal si se pulsa fuera de la tarjeta
window.onclick = function(event) {
    if (event.target == modal) {
        closeFullList();
    }
}

function selectAgent() { //MOSTRAR GUIA
    
    const infoBox = document.getElementById('infoBox');
    const data = proxies[currentIdx];
    const path4pc = "media/discos/"+discs[data.sets.at(0)].disc+".webp"; //Segunda posicion del array de sets = 4pcs
    const path2pc = "media/discos/"+discs[data.sets.at(1)].disc+".webp"; //Segunda posicion del array de sets = 2pcs
    
    // Actualizar el rol en el panel de detalles antes de mostrarlo
    document.getElementById('charRole').innerText = data.role || "TBD";

    document.getElementById('webtitle').innerText= "Zenless Logic | "+data.name;
    
    // Animación de expansión
    infoBox.classList.add('expanded');

    //Discos
    document.getElementById('4pc').src = path4pc;
    document.getElementById('2pc').src = path2pc;
    
    // Aquí podrías añadir lógica para cargar sus equipos específicos

    document.getElementById('mc').src = data.thumb;
    document.getElementById('mc2').src = data.thumb; //Ambos agentes seleccionados

    document.getElementById('tm1').src = proxies[data.team.at(0)].thumb;
    document.getElementById('tm2').src = proxies[data.team.at(1)].thumb; //Primer Equipo 

    document.getElementById('tm3').src = proxies[data.team.at(2)].thumb;
    document.getElementById('tm4').src = proxies[data.team.at(3)].thumb; //Segundo Equipo

    // Añadimos clase de expansión a ambos para controlar el degradado de la imagen
    uiLayer.classList.add('agent-selected');

    document.body.style.overflow = 'hidden';

    // 2. Generar el Orden de Habilidades dinámicamente con IMÁGENES
    const skillsContainer = document.querySelector('.skills-priority');
    skillsContainer.innerHTML = ""; // Limpiamos

    if (data.skillOrder) {
        data.skillOrder.forEach(skill => {
            const slot = document.createElement('div');
            slot.className = 'skill-slot';
            
            // Mapeo de iniciales a nombres completos para el "tooltip"
            const skillNames = { 'L': 'Pasiva', 'H': 'Habilidad Special', 'B': 'Básicos', 'D': 'Definitiva (Ulti)' };
            slot.title = skillNames[skill];
            
            // NUEVO: Mapeo de iniciales a nombres de ARCHIVO
            const skillFiles = { 'L': 'letras.webp', 'H': 'special.webp', 'B': 'basicos.webp', 'D': 'ulti.webp' };
            
            // Crear la imagen y añadirla al slot
            const img = document.createElement('img');
            img.src = `media/ico/${skillFiles[skill]}`; // Ruta completa a la imagen
            img.alt = skillNames[skill];
            
            slot.appendChild(img); // Añadimos la imagen
            skillsContainer.appendChild(slot); // Añadimos el slot al contenedor
            
            // Flecha entre habilidades excepto la última
            if (data.skillOrder.indexOf(skill) < data.skillOrder.length - 1) {
                const arrow = document.createElement('span');
                arrow.className = 'skill-arrow'; // Añadimos clase para CSS
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
