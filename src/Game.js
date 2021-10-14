const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require("../src/Turn.js");
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
  //let newCards = prototypeQuestions.map(card => new Card(card["id"], card["question"]))
    let cards = prototypeQuestions.map((card) => { return new Card(card.id, card.question, card.answers, card.correctAnswer)})
  //let newDeck = new Deck(newCards);
    let deck = new Deck(cards);
  //let newRound = new Round(newDeck)
    this.currentRound = new Round(deck);
  //this.pringMessage(newDeck, newRound)
    this.printMessage(deck, this.currentRound)
  //this.printQuestion(newRound)
    this.printQuestion(this.currentRound)
};

};

module.exports = Game;
