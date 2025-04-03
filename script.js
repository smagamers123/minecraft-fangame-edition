window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugarImg = document.getElementById('boton-jugar-img');
    let botonNormal = 'assets/menu/boton_play.png';
    let botonPresionado = 'assets/menu/boton_play_presionado.png';

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            menu.style.display = 'block';
        }, 2000);
    }, 3000);

    document.getElementById('jugar').addEventListener('mousedown', () => {
        botonJugarImg.src = botonPresionado;
    });

    document.getElementById('jugar').addEventListener('mouseup', () => {
        botonJugarImg.src = botonNormal;
    });

    document.getElementById('jugar').addEventListener('click', () => {
        alert('¡A jugar!');
    });

    document.getElementById('opciones').addEventListener('click', () => {
        alert('Opciones del juego');
    });

    document.getElementById('salir').addEventListener('click', () => {
        alert('Salir del juego');
    });
};
