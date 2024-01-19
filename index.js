
let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true

let message = ""

if (sum <= 20) {
    message = "Do you want to draw another card?"
} else if (sum === 21) {
    message = "You win Blackjack!"
    hasBlackjack = true
} else {
    message = "You lose!"
    isAlive = false
}

console.log(message)