// purchaseCounter.js

function initializeCounter() {
    const counterElement = document.getElementById('counter');
    let count = localStorage.getItem('purchaseCount');

    // Reinicia el contador a cero si no hay un valor almacenado
    if (!count) {
        count = 0; // Número inicial de personas que han adquirido el programa
        localStorage.setItem('purchaseCount', count);
    }

    // Muestra el valor actual en la página
    counterElement.textContent = count;
}

function incrementCounter() {
    const counterElement = document.getElementById('counter');
    let count = parseInt(localStorage.getItem('purchaseCount'), 10);
    count += 1;
    localStorage.setItem('purchaseCount', count);
    counterElement.textContent = count;
}

function startAutoIncrement() {
    const fortyMinutes = 40 * 60 * 1000; // 40 minutos en milisegundos
    setInterval(incrementCounter, fortyMinutes); // Incrementa cada 40 minutos
}

document.addEventListener('DOMContentLoaded', function() {
    initializeCounter();
    startAutoIncrement();

    // Añade evento de incremento a los botones CTA
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            incrementCounter();
            // Aquí puedes redirigir o realizar otras acciones según tu necesidad
            window.location.href = 'https://007aa4-22.myshopify.com/collections/promociones/products/tenis-campus-00s-adidas';
        });
    });
});
