let firstCard = 5
let secondCard = 11

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?")
}
else if (sum === 21) {
    console.log("Blackjack!")
}
else if (sum > 21) {
    console.log("Bust!")
}