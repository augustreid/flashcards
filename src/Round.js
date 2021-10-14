const Turn = require("../src/Turn.js");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn = null;
  }
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    this.updateTurns();
    this.recordGuess();
    this.returnFeedback();
    this.updateCard();
    if (this.currentTurn.evaluateGuess()) {
      return "correct!"
    } else {
      return "incorrect!"
    }
  }
  updateTurns() {
    this.turns++;
    return this.turns;
  }
  recordGuess() {
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
  }
  returnFeedback() {
    let message = this.currentTurn.giveFeedback();
    return message;
  }
  updateCard() {
    this.currentCard = this.deck.cards[this.turns];
  }
  calculatePercentCorrect() {
    let totalCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    let percentCorrect = (totalCorrect / this.deck.cards.length) * 100;
    return percentCorrect;
  }
  endRound() {
    let endMessage = console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return endMessage;
  }
}


module.exports = Round;
