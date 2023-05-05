let cards = []; //array - ordered list of cards
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "Player",
    chips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

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
    // initialize game
    isAlive = true;
    // Generate first 2 cards
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = cards[0] + cards[1];
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
    // check game conditions before drawing new card
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card)
    renderGame();
    }
}



