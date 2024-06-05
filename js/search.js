// Adiciona um evento que será acionado quando o conteúdo do DOM for completamente carregado
document.addEventListener('DOMContentLoaded', search)

// Função 'search' que é chamada quando o DOM está completamente carregado
function search() {
    // Obtém o elemento de entrada com o ID 'search' e o armazena na constante 'searchInput'
    const searchInput = document.getElementById('search');
    // Seleciona todos os elementos com a classe 'card' dentro do contêiner com a classe 'products'
    const cards = document.querySelectorAll('.products .card');

    // Adiciona um evento de 'input' ao elemento de entrada 'searchInput'
    searchInput.addEventListener('input', function() {
        // Obtém o valor atual do campo de entrada e o converte para minúsculas
        const filter = this.value.toLowerCase();

        // Itera sobre cada card
        cards.forEach(function(card) {
            // Seleciona o texto do título (elemento 'h3') do card e o converte para minúsculas
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            
            // Verifica se o texto do título do card inclui o filtro de busca
            if (cardTitle.includes(filter)) {
                // Mostra o card se o título corresponder ao filtro
                card.style.display = '';
            } else {
                // Oculta o card se o título não corresponder ao filtro
                card.style.display = 'none';
            }
        });
    });
}