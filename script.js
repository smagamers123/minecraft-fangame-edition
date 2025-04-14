window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugar = document.getElementById('jugar');
    const botonJugarImg = document.getElementById('boton-jugar-img');
    let botonNormal = 'assets/menu/boton_play.png';
    let botonPresionado = 'assets/menu/boton_play_presionado.png';
    let esperando = false;

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none'; // <-- ¡Este es el cambio importante!
            menu.style.display = 'flex';
        }, 2000); // Este tiempo debe coincidir con la duración de la transición de opacidad en el CSS
    }, 3000); // Tiempo total antes de que la intro comience a desaparecer (3 segundos) + duración del desvanecimiento (2 segundos) = 5 segundos totales

    botonJugar.addEventListener('mousedown', () => {
        if (!esperando) {
            botonJugarImg.src = botonPresionado;
            esperando = true;
            setTimeout(() => {
                botonJugarImg.src = botonNormal;
                esperando = false;
            }, 2000);
        }
    });

    botonJugar.addEventListener('click', (event) => {
        if (!esperando) {
            setTimeout(() => {
                alert('¡A jugar!');
                // Aquí iría la lógica para iniciar el juego
            }, 2000);
            event.target.blur();
        }
    });
};
