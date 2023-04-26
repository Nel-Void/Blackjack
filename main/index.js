let firstCard = 10;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";   
    } else if (sum === 21) {
        message = "Alright! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You've lost the round! 😭";
        isAlive = false;
    }
    console.log(message)
}




