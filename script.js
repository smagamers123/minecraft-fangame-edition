window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            menu.style.display = 'block';
        }, 2000); // Espera 2 segundos (la duración de la transición)
    }, 3000); // Espera 3 segundos antes de iniciar la transición

    document.getElementById('jugar').addEventListener('click', () => {
        // Lógica para iniciar el juego
        alert('¡A jugar!');
    });

    document.getElementById('opciones').addEventListener('click', () => {
        // Lógica para mostrar las opciones
        alert('Opciones del juego');
    });

    document.getElementById('salir').addEventListener('click', () => {
        // Lógica para salir del juego
        alert('Salir del juego');
    });
};
