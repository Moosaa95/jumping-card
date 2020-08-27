const qs = prop => document.querySelector(prop)


let stackOfCard = document.querySelector('.stack')


{
    [...stackOfCard.children].reverse().forEach(i => stackOfCard.append(i))
}

stackOfCard.addEventListener('click', sweep)

function sweep(e) {
    let card = qs('.card:last-child')
    if (e.target !== card) return
    card.style.animation = 'anime 700ms forwards'

    setTimeout(() => {
        card.style.animation = ""
        stackOfCard.prepend(card)
    }, 700)
}