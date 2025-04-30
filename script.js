window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const jugarButton = document.getElementById('jugar');
    const opcionesButton = document.getElementById('opciones');
    const marketplaceButton = document.getElementById('marketplace');
    const botonesMenu = document.querySelectorAll('.botones-menu button');
    const gameContainer = document.getElementById('game-container');
    const startGameButton = document.getElementById('start-game-button');
    const backButton = document.getElementById('back-button');
    const fullscreenButtonMenu = document.getElementById('fullscreen-button-menu');
    const crearCuentaButton = document.getElementById('crear-cuenta-button');
    const audioElement = new Audio('assets/menu/minecraft_song.mp3');
    audioElement.loop = true;

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none'; // Ocultar la intro después de la transición
            menu.style.display = 'flex';    // Mostrar el menú
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
    }

    const botonesPrincipales = [jugarButton, marketplaceButton, opcionesButton];
    botonesPrincipales.forEach(boton => {
        const imgElement = boton.querySelector('.menu-button-img');
        cambiarEstadoBoton(boton, 'assets/menu/boton_play.png', 'assets/menu/boton_play_presionado.png', imgElement);

        boton.addEventListener('click', () => {
            if (boton.id === 'jugar') {
                botonesMenu.forEach(b => b.classList.add('slide-out'));
                menu.classList.add('slide-out');
                setTimeout(() => {
                    menu.style.display = 'none';
                    gameContainer.style.display = 'flex';
                }, 500);
            } else if (boton.id === 'marketplace') {
                alert('Marketplace del juego');
            } else if (boton.id === 'opciones') {
                alert('Opciones del juego');
            }
            boton.blur();
        });
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

    if (fullscreenButtonMenu) {
        fullscreenButtonMenu.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }

    if (crearCuentaButton) {
        crearCuentaButton.addEventListener('click', () => {
            alert('Crear cuenta del jugador');
            crearCuentaButton.blur();
        });
    }

    if (startGameButton) {
        startGameButton.addEventListener('click', () => {
            alert('¡A jugar!');
            startGameButton.blur();
        });
    }
};
