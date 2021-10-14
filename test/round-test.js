const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");

describe("Round", function() {

  it.skip("should be a function", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(Round).to.be.a("function");
  });

  it.skip("should be an instance of Round", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round).to.be.a.instanceof(Round);
  });

  it.skip("should have a deck", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it.skip("should have a current card", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
  });

  it.skip("should have a turn counter wit.skiph default value 0", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.turns).to.equal(0);
  });

  it.skip("should store incorrect guesses", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip("should return the current card", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip("should be able to instantiate a new turn", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.takeTurn()
    expect(round.currentTurn).to.be.a.instanceof(Turn);
  });

  it.skip("should be able to update turns", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.updateTurns();
    expect(round.turns).to.equal(1);
  });

  it.skip("should be able to evaluate guesses and store incorrect ones", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.takeTurn("oops");
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it.skip("should be able to return feedback", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.takeTurn("oops");
    expect(round.returnFeedback()).to.equal("incorrect!");
    round.takeTurn("Desilu");
    expect(round.returnFeedback()).to.equal("correct!");
  });

  it.skip("should be able to go to the next card", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.takeTurn("oops");
    expect(round.currentCard).to.equal(card2);
  });

  it.skip("should be able to calculate percentage of correct guesses", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.takeTurn("chicken butt");
    round.takeTurn("oops");
    round.takeTurn("oops");
    round.takeTurn("oops");
    expect(round.calculatePercentCorrect()).to.equal(25);
  });

  it.skip("should be able to end the round", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.takeTurn("chicken butt");
    round.takeTurn("oops");
    round.takeTurn("oops");
    round.takeTurn("oops");
    round.endRound();
    expect(round.endRound()).to.equal(console.log("** Round over! ** You answered 25% of the questions correctly!"))
  });
});

// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
//
// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//
// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

//Add a property for current turn.
//taketurn can assign to new instance of Turn.
//Then helper functions for everything that goes in takeTurn can reference the this.currentTurn.
