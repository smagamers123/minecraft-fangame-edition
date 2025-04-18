window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugar = document.getElementById('jugar');
    const botonJugarImg = document.getElementById('boton-jugar-img');
    const botonOpciones = document.getElementById('opciones');
    const botonOpcionesImg = botonOpciones.querySelector('.menu-button-img');
    const botonSalir = document.getElementById('salir');
    const botonSalirImg = botonSalir.querySelector('.menu-button-img');

    let botonPlayNormal = 'assets/menu/boton_play.png';
    let botonPlayPresionado = 'assets/menu/boton_play_presionado.png';
    let botonGrisNormal = 'assets/menu/boton_gris.png';
    let botonGrisPresionado = 'assets/menu/boton_gris_presionado.png';
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
                }, 200); // Un tiempo más corto para el efecto de presión
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
            // Aquí puedes añadir la lógica específica para cada botón
            if (boton.id === 'opciones') {
                alert('Opciones del juego');
            } else if (boton.id === 'salir') {
                alert('Salir del juego');
            }
            boton.blur();
        });
    }

    // Aplicar el efecto al botón Jugar
    cambiarEstadoBoton(botonJugar, botonPlayNormal, botonPlayPresionado, botonJugarImg);

    // Aplicar el efecto a los botones Opciones y Salir
    cambiarEstadoBoton(botonOpciones, botonGrisNormal, botonGrisPresionado, botonOpcionesImg);
    cambiarEstadoBoton(botonSalir, botonGrisNormal, botonGrisPresionado, botonSalirImg);
};
