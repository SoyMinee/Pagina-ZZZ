gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const stage = document.querySelector('.tracking-stage');
    const video = document.querySelector('#tv-video');
    const flash = document.querySelector('#tv-flash');
    const staticNoise = document.querySelector('#static-noise');
    const screenCover = document.querySelector('#tv-screen');
    const hud = document.querySelector('.hud-overlay');

    // Iniciamos con el balanceo
    stage.classList.add('swaying');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".escena",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
        }
    });

    // --- LINEA DE TIEMPO SINCRONIZADA ---

    // 1. Desvanecer el HUD (Overlay táctico)
    tl.to(hud, {
        opacity: 0,
        duration: 0.5
    }, 0.1); // Empieza al 10% del scroll

    // 2. Animación de Zoom (Mantenemos tu scale: 3)
    tl.to(stage, {
        scale: 3, 
        ease: "none",
        onUpdate: function() {
            // Quitar el balanceo si el usuario scrollea
            if (this.progress() > 0.01) stage.classList.remove('swaying');
            else stage.classList.add('swaying');
        }
    });

    // 3. EFECTO DE SINTONIZACIÓN (Estática)
    tl.to(staticNoise, {
        onStart: () => {
            staticNoise.style.display = "block";
            staticNoise.classList.add('active-static');
        },
        opacity: 1,
        duration: 0.2
    }, 0.75); // Aparece al 75%

    // 4. ENCENDIDO DEL VIDEO
    tl.to(video, {
        opacity: 1,
        duration: 0.1,
        onStart: () => {
            video.play();
            gsap.fromTo(flash, { opacity: 1 }, { opacity: 0, duration: 0.3 });
        }
    }, 0.85); // El video está debajo, pero la estática aún lo tapa al 100%

    // 5. MANTENER ESTÁTICA Y LUEGO LIMPIAR (El "segundo" de duración)
    // Aquí es donde se queda 1 segundo (representado por el tramo de scroll)
    tl.to(staticNoise, {
        opacity: 1, // Se mantiene totalmente visible
        duration: 0.5 // Este tramo de scroll actúa como el tiempo de espera
    }, 0.86);

    // Finalmente, desvanecemos estática y cristal para revelar el video nítido
    tl.to([staticNoise, screenCover], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            staticNoise.style.display = "none";
            staticNoise.classList.remove('active-static');
        }
    }, 0.95); // Se limpia justo al final del scroll

    // --- GESTIÓN AL ALEJARSE (Atrás) ---
    ScrollTrigger.create({
        trigger: ".escena",
        start: "top top",
        onLeaveBack: () => {
            // Al volver arriba del todo (idle), aseguramos balanceo y HUD
            video.pause();
            gsap.set(hud, { opacity: 1 });
        },
        onUpdate: (self) => {
            // Si el usuario está retrocediendo (direction -1) y cruza el umbral del 85%
            if (self.direction === -1 && self.progress < 0.84 && video.paused === false) {
                // Detenemos el video y hacemos el flash de apagado
                video.pause();
                gsap.fromTo(flash, { opacity: 1 }, { 
                    opacity: 0, 
                    duration: 0.4, 
                    onComplete: () => {
                        // Tras el flash, volvemos a mostrar el cristal apagado instantáneamente
                        gsap.set(video, { opacity: 0 });
                        gsap.set(screenCover, { opacity: 0.8 });
                    }
                });
            }
        }
    });
    

    // --- CRONÓMETRO DEL HUD ---
    const timerSpan = document.getElementById('hud-timer');
    let startTime = Date.now();

    function updateTimer() {
        let elapsed = Date.now() - startTime;
        let hh = Math.floor(elapsed / 3600000).toString().padStart(2, '0');
        let mm = Math.floor((elapsed % 3600000) / 60000).toString().padStart(2, '0');
        let ss = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, '0');
        timerSpan.innerText = `${hh}:${mm}:${ss}`;
    }
    setInterval(updateTimer, 1000);
});