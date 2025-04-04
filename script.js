window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugar = document.getElementById('jugar');
    const botonJugarImg = document.getElementById('boton-jugar-img');
    let botonNormal = 'assets/menu/boton_play.png';
    let botonPresionado = 'assets/menu/boton_play_presionado.png';

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            menu.style.display = 'flex'; // Usa flex para centrar el contenido del menú
        }, 2000);
    }, 3000);

    botonJugar.addEventListener('mousedown', () => {
        botonJugarImg.src = botonPresionado;
    });

    botonJugar.addEventListener('mouseup', () => {
        // No volvemos a la imagen normal al soltar
    });

    botonJugar.addEventListener('click', () => {
        // La imagen ya se cambió en mousedown y se queda así
        alert('¡A jugar!');
        // Opcionalmente, podrías agregar aquí lógica para cargar el juego
    });

    document.getElementById('opciones').addEventListener('click', () => {
        alert('Opciones del juego');
    });

    document.getElementById('salir').addEventListener('click', () => {
        alert('Salir del juego');
    });
};
