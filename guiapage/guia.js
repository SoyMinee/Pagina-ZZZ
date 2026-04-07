document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('camera-viewport');
    
    const START_SCALE = 1.12; 
    const MAX_SCALE = 6.0;

    window.addEventListener('scroll', () => {
        // Obtenemos cuánto se ha bajado
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        
        // Porcentaje de 0 a 1
        const scrollPercent = scrollTop / (docHeight - winHeight);
        
        // Debug: Si esto sale en la consola al mover la rueda, el scroll funciona
        console.log("Progreso:", scrollPercent.toFixed(2));

        // Aplicamos el zoom
        const currentScale = START_SCALE + (scrollPercent * (MAX_SCALE - START_SCALE));
        viewport.style.transform = `scale(${currentScale})`;

        // Gestión del balanceo
        if (scrollPercent > 0.01) {
            viewport.classList.remove('camera-sway');
        } else {
            viewport.classList.add('camera-sway');
        }
    });
});