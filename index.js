let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")   
} else if (sum === 21) {
    console.log("Alright! You've got Blackjack! 🥳")
} else (sum > 21) {
    console.log("You've lost the round! 😭")
}