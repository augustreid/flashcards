const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");
const Round = require("../src/Round.js");

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

}

module.exports = Game;
