document.addEventListener('DOMContentLoaded', search)

function search() {
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.products .card');

    searchInput.addEventListener('input', function() {
        const filter = this.value.toLowerCase();

        cards.forEach(function(card) {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            
            if (cardTitle.includes(filter)) {
                card.style.display = ''; // Mostra o card se o título corresponder ao filtro
            } else {
                card.style.display = 'none'; // Oculta o card se o título não corresponder ao filtro
            }
        });
    });
}