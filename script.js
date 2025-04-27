window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugar = document.getElementById('jugar');
    const botonesMenu = document.querySelectorAll('.menu button');
    const gameContainer = document.getElementById('game-container');

    let botonPlayNormal = 'assets/menu/boton_play.png';
    let botonPlayPresionado = 'assets/menu/boton_play_presionado.png';
    let esperando = false;

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            menu.style.display = 'flex';
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
                setTimeout(() => {
                    menu.style.display = 'none';
                    gameContainer.style.display = 'flex';
                }, 300);
            } else if (boton.id === 'opciones') {
                alert('Opciones del juego');
            } else if (boton.id === 'salir') {
                alert('Salir del juego');
            }
            boton.blur();
        });
    }

    botonesMenu.forEach(boton => {
        const imgElement = boton.querySelector('.menu-button-img') || document.getElementById('boton-jugar-img');
        cambiarEstadoBoton(boton, botonPlayNormal, botonPlayPresionado, imgElement);
    });
};
