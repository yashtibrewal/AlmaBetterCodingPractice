
/**
 * Creates all the cards in the deck
 * @returns cards object having all the cards in a deck
 */

function getCards() {

    const cards = [];
    const suits = ['spades', 'clubs', 'hearts', 'diamonds'];

    for (let i = 1; i <= 13; i++) {
        for (let j = 0; j < suits.length; j++) {
            cards.push({
                name: i + ' ' + suits[j],
                value: i,
                suit: suits[j]
            })
        }
    }

    return cards;
}


function getRandomPosition(cardsRemaining) {

    let random = Math.random() * cardsRemaining;
    return Math.floor(random);
}


/**
 * 
 * @param {Takes in cards} deck 
 * @returns: returns a random card from the input card
 */
function drawCard(deck) {

    // gets the random index value for a given set of cards
    let keys = Object.keys(deck);
    let len = keys.length;
    let randomCardIndex = getRandomPosition(len);

    // storing the card
    const card = deck[keys[randomCardIndex]];

    // after drawing the card, we remove it from the deck
    delete deck[keys[randomCardIndex]];

    return card;
}

function playCard(playerScore, card, playerNumber) {


    // Player One uses it
    playerScore += card.value;

    console.log(`Player ${playerNumber} has drawn: ${card.name}, score = ${playerScore}`);

    return playerScore;

}

/**
 * main card game function
 */
function cardGame() {

    // card varaibles
    const cards = getCards(); let card = {};

    // player varaibles
    let playerOne = 0; let playerTwo = 0; let flag = true;

    // game varaibles
    let turns = 20;

    while (turns > 0) {

        // Draws a card
        card = drawCard(cards)
        if (flag) {

            playerOne = playCard(playerOne, card, 1);
            turns--;

        } else {

            // player two uses it
            playerTwo = playCard(playerTwo, card, 2);

            turns--;
        }

        // to keep track of player turn
        flag = !flag;
    }


    if (playerOne > playerTwo) {
        console.log('Player 1 wins with a total of ' + playerOne);
    } else if (playerOne < playerTwo) {
        console.log('Player 2 wins with a total of ' + playerTwo);
    } else {
        console.log('tie, play again');
    }

}

cardGame();

