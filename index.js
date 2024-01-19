
let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}

function renderGame() {
    listOfCards = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        if (i === cards.length - 1) {
            listOfCards += cards[i] + ""
        } else {
            listOfCards += cards[i] + ", "
        }
    }
    cardsEl.textContent = listOfCards
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You win Blackjack!"
        hasBlackjack = true
    } else {
        message = "You lose!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]

    sum = cards[0] + cards[1]

    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let addCard = getRandomCard()
        sum += addCard
        cards.push(addCard)
        console.log(cards[2])
        renderGame()
    }
}