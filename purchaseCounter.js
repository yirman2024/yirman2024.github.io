function initializeCounter() {
    const counterElement = document.getElementById('counter');
    let count = localStorage.getItem('purchaseCount');

    // Si no hay un valor almacenado, inicializa a 100
    if (!count) {
        count = 100; // Número inicial de personas que han adquirido el programa
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
    const fortyFiveMinutes = 45 * 60 * 1000; // 45 minutos en milisegundos
    setInterval(incrementCounter, fortyFiveMinutes); // Incrementa cada 45 minutos
}

// Inicializa el contador y comienza el auto-incremento
document.addEventListener('DOMContentLoaded', () => {
    initializeCounter();
    startAutoIncrement();
});


document.addEventListener('DOMContentLoaded', function() {
    initializeCounter();
    startAutoIncrement();

    // Añade evento de incremento a los botones CTA
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            incrementCounter();
            // Aquí puedes redirigir o realizar otras acciones según tu necesidad
            window.location.href = 'https://007aa4-22.myshopify.com/products/tenis-samba-unisex';
        });
    });
});
