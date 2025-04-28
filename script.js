window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugar = document.getElementById('jugar');
    const botonesMenu = document.querySelectorAll('.botones-menu button:not(#fullscreen-button-menu)');
    const gameContainer = document.getElementById('game-container');
    const backButton = document.getElementById('back-button');
    const fullscreenButtonMenu = document.getElementById('fullscreen-button-menu');
    const audioElement = new Audio('assets/menu/minecraft_song.mp3');
    audioElement.loop = true;

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            menu.style.display = 'flex';
            audioElement.play().catch(error => console.error("Error al reproducir la música:", error));
        }, 2000);
    }, 3000);

    function cambiarEstadoBoton(boton, imagenNormal, imagenPresionada, imgElement) {
        let esperandoLocal = false;
        boton.addEventListener('mousedown', () => {
            if (!esperandoLocal) {
                imgElement.src = imagenPresionada;
                esperandoLocal = true;
                setTimeout(() => {
                    imgElement.src = imagenNormal;
                    esperandoLocal = false;
                }, 200);
            }
        });

        boton.addEventListener('mouseup', () => {
            if (esperandoLocal) {
                setTimeout(() => {
                    imgElement.src = imagenNormal;
                    esperandoLocal = false;
                }, 200);
            }
        });

        boton.addEventListener('click', () => {
            if (boton.id === 'jugar') {
                botonesMenu.forEach(boton => {
                    boton.classList.add('slide-out');
                });
                menu.classList.add('slide-out');
                setTimeout(() => {
                    menu.style.display = 'none';
                    gameContainer.style.display = 'flex';
                }, 500);
            } else if (boton.id === 'opciones') {
                alert('Opciones del juego');
            } else if (boton.id === 'salir') {
                alert('Salir del juego');
            }
            boton.blur();
        });
    }

    botonesMenu.forEach(boton => {
        const imgElement = boton.querySelector('.menu-button-img');
        cambiarEstadoBoton(boton, 'assets/menu/boton_play.png', 'assets/menu/boton_play_presionado.png', imgElement);
    });

    backButton.addEventListener('click', () => {
        gameContainer.style.display = 'none';
        botonesMenu.forEach(boton => {
            boton.classList.remove('slide-out');
        });
        menu.classList.remove('slide-out');
        menu.style.display = 'flex';
        audioElement.play().catch(error => console.error("Error al reproducir la música:", error));
    });

    // Funcionalidad de pantalla completa para el botón del menú
    fullscreenButtonMenu.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    });
};
