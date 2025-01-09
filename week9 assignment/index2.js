class Card {
    constructor(value, suit) {
        this.value = value; // Number representing the card's point value aces can be either 1 or 11 depending on the card game
        this.suit = suit;   // Suit of the card
    }

    toString() {
        const valueString = this.value > 10 ? ["Jack", "Queen", "King", "Ace"][this.value - 11] : this.value;
        return `${valueString} of ${this.suit}`;
    }
}

class Deck {
    constructor() {
        const cardSuits = ["Spades ♤", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
        this.cards = [];

        for (let suit of cardSuits) {
            for (let value = 2; value <= 14; value++) { // 2 to Ace
                this.cards.push(new Card(value, suit));
            }
        }
        this.shuffle();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.splice(0, 26); // Deal 26 cards
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    playCard() {
        return this.hand.shift(); // Plays the first card
    }

    addPoint() {
        this.score++;
    }
}

// Function to start the game
function startGame(playerName, playMode) {
    const player1 = new Player(playerName);
    const player2 = new Player("Player 2");
    const deck = new Deck();

    player1.hand = deck.deal();
    player2.hand = deck.deal();

    console.log("Starting the game...");
    

    // Added a function to handle each turn
    const playTurn = (turn) => {
        if (turn >= 26) {
            console.log("Game Over!");
            console.log(`Final Scores -> ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`);
            if (player1.score > player2.score) {
                console.log(`${player1.name} wins the game!`);
                console.log(`${player2.name} thinks ${player1.name} must have cheated`);
            } else if (player1.score < player2.score) {
                const responses = [
                    `${player1.name}, better luck next time!`,
                    `Don't worry, ${player1.name}, you can always try again!`,
                    `${player1.name}, it was a tough game! You'll get them next time!`
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                console.log(randomResponse);
                console.log(`${player2.name} wins the game!`); //added random responses to make it a bit more interesting
            } else {
                console.log("It's a tie!");
            }
            return;
        }

        const card1 = player1.playCard();
        const card2 = player2.playCard();

        console.log(`Turn ${turn + 1}:`);
        console.log(`${player1.name} plays: ${card1}`);
        console.log(`${player2.name} plays: ${card2}`);

        if (card1.value > card2.value) {
            player1.addPoint();
            console.log(`${player1.name} wins this turn!`);
        } else if (card1.value < card2.value) {
            player2.addPoint();
            console.log(`${player2.name} wins this turn!`);
        } else {
            console.log("It's a tie this turn!");
        }

        console.log(`Scores -> ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}\n`);

        // Automatically proceed to the next turn after a short delay
        setTimeout(() => {
            playTurn(turn + 1);
        }, 1000); // 1 second delay
    };

    // Start the first turn
    playTurn(0);
}

// Start the game with Player 1's name set to "Bob" and play mode set to "auto"
startGame("Bob", "auto");