// scripts.js

const countdownElement = {
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// Tiempo inicial en milisegundos (5 horas y 25 minutos)
const initialTime = (5 * 60 * 60 * 1000) + (25 * 60 * 1000);

function updateCountdown() {
    const now = new Date().getTime();
    let endDate = localStorage.getItem('endDate');

    if (!endDate) {
        // Si no existe una fecha de destino en el almacenamiento, establecer una nueva
        endDate = now + initialTime;
        localStorage.setItem('endDate', endDate);
    }

    let distance = endDate - now;

    if (distance < 0) {
        // Reinicia la fecha de destino al tiempo inicial cuando se acabe el tiempo
        endDate = now + initialTime;
        localStorage.setItem('endDate', endDate);
        distance = initialTime;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.hours.textContent = String(hours).padStart(2, '0');
    countdownElement.minutes.textContent = String(minutes).padStart(2, '0');
    countdownElement.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown(); // Inicializa el temporizador
setInterval(updateCountdown, 1000);

//funcion para la sección de opiniones

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}





// Mostrar la ventana de promoción al cargar la página
window.onload = function() {
    document.getElementById('promoModal').style.display = 'flex';
};

// Función para cerrar la ventana de promoción
function closePromo() {
    document.getElementById('promoModal').style.display = 'none';
}



//funcion para la ventana de cierre
document.addEventListener('DOMContentLoaded', () => {
    const promoModal = document.getElementById('promoModal');
    const closeBtn = document.getElementById('closeBtn');

    // Función para cerrar la ventana de promoción
    function closeModal() {
        promoModal.style.display = 'none';
    }

    // Cerrar la ventana de promoción al hacer clic en el botón de cierre
    closeBtn.addEventListener('click', closeModal);

    // Opcional: Cerrar la ventana de promoción al hacer clic fuera de la ventana
    window.addEventListener('click', (event) => {
        if (event.target === promoModal) {
            closeModal();
        }
    });
});
