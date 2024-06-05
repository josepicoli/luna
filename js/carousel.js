// Adiciona um evento que será acionado quando o conteúdo do DOM for completamente carregado
document.addEventListener("DOMContentLoaded", carousel)

// Função assíncrona chamada 'carousel'
async function carousel() {
    // Obtém o elemento com o ID 'image-banner' e o armazena na constante 'banner'
    const banner = window.document.getElementById('image-banner')
    // Obtém o elemento com o ID 'name-banner' e o armazena na constante 'name'
    const name = window.document.getElementById('name-banner')
    // Obtém o elemento com o ID 'price-banner' e o armazena na constante 'price'
    const price = window.document.getElementById('price-banner')
    // Obtém o elemento com o ID 'discount-banner' e o armazena na constante 'discount'
    const discount = window.document.getElementById('discount-banner')

    // Inicia um loop while que continuará enquanto 'banner' não for nulo ou indefinido
    while(banner) {
        // Atualiza a fonte da imagem do banner
        banner.src = 'img/games-img/falloutnv.jpg'
        // Atualiza o texto do elemento 'name' para 'Fallout: New Vegas'
        name.textContent = 'Fallout: New Vegas'
        // Atualiza o texto do elemento 'price' para 'R$ 19,99'
        price.textContent = 'R$ 19,99'
        // Atualiza o texto do elemento 'discount' para '-10%'
        discount.textContent = '-10%'
        // Pausa a execução da função por 4000 milissegundos (4 segundos)
        await sleep(4000)

        // Atualiza a fonte da imagem do banner
        banner.src = 'img/games-img/days-gone.png'
        // Atualiza o texto do elemento 'name' para 'Days Gone'
        name.textContent = 'Days Gone'
        // Atualiza o texto do elemento 'price' para 'R$ 49,97'
        price.textContent = 'R$ 49,97'
        // Atualiza o texto do elemento 'discount' para '-75%'
        discount.textContent = '-75%'
        // Pausa a execução da função por 4000 milissegundos (4 segundos)
        await sleep(4000)

        // Atualiza a fonte da imagem do banner
        banner.src = 'img/games-img/diablo.jpg'
        // Atualiza o texto do elemento 'name' para 'Diablo IV'
        name.textContent = 'Diablo IV'
        // Atualiza o texto do elemento 'price' para 'R$ 174,95'
        price.textContent = 'R$ 174,95'
        // Atualiza o texto do elemento 'discount' para '-50%'
        discount.textContent = '-50%'
        // Pausa a execução da função por 4000 milissegundos (4 segundos)
        await sleep(4000)
    }
}

// Função que retorna uma promessa que é resolvida após um tempo especificado em milissegundos
function sleep(ms) {
    // Retorna uma nova promessa que é resolvida após 'ms' milissegundos
    return new Promise(resolve => setTimeout(resolve, ms));
}