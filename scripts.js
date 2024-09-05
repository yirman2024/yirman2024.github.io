// scripts.js

const countdownElement = {
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// Tiempo inicial en milisegundos (5 horas y 25 minutos)
const initialTime = (9 * 60 * 60 * 1000) + (21 * 60 * 1000);

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



//muesta el anuncio del codigo de promocion

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el modal al cargar la página
    document.getElementById('promoModal').style.display = 'block';
    moveCarousel(0); // Inicializa el carrusel mostrando la primera imagen
});

function closePromoModal() {
    document.getElementById('promoModal').style.display = 'none';
}
