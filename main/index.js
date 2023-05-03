let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //array - ordered list of cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// Get the element ID to display message
let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
    randNum = Math.floor(Math.random() * 13) + 1;
    if (randNum === 1) {
        return 1;
    } else if (randNum >= 11 & randNum <= 13) {
        return 10;
    } else {
        return randNum;
    }
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    // for loop renders all the cards for us
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }



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
    let card = getRandomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card)
    renderGame();
}



