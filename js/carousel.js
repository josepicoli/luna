document.addEventListener("DOMContentLoaded", carousel)

async function carousel() {
    const banner = window.document.getElementById('image-banner')
    const name = window.document.getElementById('name-banner')
    const price = window.document.getElementById('price-banner')
    const discount = window.document.getElementById('discount-banner')

    while(banner) {
        banner.src = 'img/games-img/falloutnv.jpg'
        name.textContent = 'Fallout: New Vegas'
        price.textContent = 'R$ 19,99'
        discount.textContent = '-10%'
        await sleep(4000)
        banner.src = 'img/games-img/days-gone.png'
        name.textContent = 'Days Gone'
        price.textContent = 'R$ 49,97'
        discount.textContent = '-75%'
        await sleep(4000)
        banner.src = 'img/games-img/diablo.jpg'
        name.textContent = 'Diablo IV'
        price.textContent = 'R$ 174,95'
        discount.textContent = '-50%'
        await sleep(4000)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}