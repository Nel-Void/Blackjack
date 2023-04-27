let firstCard = 10;
let secondCard = 9;
let cards = [firstCard, secondCard]; //array - ordered list of cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// Get the element ID to display message
let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame();
}

function renderGame() {
    // render out firstCard & secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    // render out all the cards we have
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";   
    } else if (sum === 21) {
        message = "Alright! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You've lost the round!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 2;
    sum += card;

    renderGame();
}



