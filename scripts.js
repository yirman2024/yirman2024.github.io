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



//muesta el anuncio del codigo de promocion

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el modal al cargar la página
    document.getElementById('promoModal').style.display = 'block';
    moveCarousel(0); // Inicializa el carrusel mostrando la primera imagen
});

function closePromoModal() {
    document.getElementById('promoModal').style.display = 'none';
}



// Seleccionar todas las estrellas
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

// Función para actualizar la calificación
function updateRating(value) {
    localStorage.setItem('rating', value); // Guardar en Local Storage
    ratingValue.textContent = value;
    stars.forEach(star => {
        star.classList.toggle('active', parseInt(star.dataset.value) <= value);
    });
}

// Cargar la calificación desde Local Storage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const storedRating = localStorage.getItem('rating');
    if (storedRating) {
        updateRating(parseInt(storedRating));
    }
});

// Agregar eventos de hover y click a las estrellas
stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const value = parseInt(star.dataset.value);
        stars.forEach(star => {
            star.classList.toggle('hover', parseInt(star.dataset.value) <= value);
        });
    });

    star.addEventListener('mouseout', () => {
        stars.forEach(star => {
            star.classList.remove('hover');
        });
    });

    star.addEventListener('click', () => {
        updateRating(parseInt(star.dataset.value));
    });
});

