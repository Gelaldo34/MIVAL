// Obtener los elementos del DOM
const siBtn = document.getElementById('si-btn');
const noBtn = document.getElementById('no-btn');
const rosas = document.getElementById('rosas');
const confirmacion = document.getElementById('confirmacion');
const aniversarioBtn = document.getElementById('aniversario-btn');
const mensajeAniversario = document.getElementById('mensaje-aniversario');

// Evento clic para el botón "Sí"
siBtn.addEventListener('click', () => {
    rosas.style.display = 'block'; // Mostrar las rosas
    confirmacion.innerHTML = ''; // Limpiar el mensaje de confirmación
});

// Evento clic para el botón "No"
noBtn.addEventListener('click', () => {
    confirmacion.innerHTML = '¿Estás segura?'; // Mostrar el mensaje de confirmación
});

// Evento clic para el botón "Aniversario"
aniversarioBtn.addEventListener('click', () => {
    mensajeAniversario.innerHTML = 'Felices tres meses, mi amor. Te amo ❤️'; // Mostrar el mensaje de aniversario
});
