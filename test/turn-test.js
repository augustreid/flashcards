const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");

describe("Turn", function() {

  it.skip("should be a function", function() {
    let turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it.skip("should be an instance of Turn", function() {
    let turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip("should have a player guess", function() {
    let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let turn = new Turn("not much", card);
    expect(turn.guess).to.equal("not much");
  });

  it.skip("should have a card", function() {
    let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let turn = new Turn("not much", card);
    expect(turn.card).to.equal(card);
  });

  it.skip("should be able to return the guess", function() {
    let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let turn = new Turn("not much", card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal("not much");
  });

  it.skip("should be able to return the card", function() {
    let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let turn = new Turn("not much", card);
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: "What's up?",
      answers: ["the sky", "not much", "chicken butt"],
      correctAnswer: "chicken butt"
    })
  });

  it.skip("should be able to evaluate the guess", function() {
    let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let turn1 = new Turn("not much", card);
    let turn2 = new Turn("chicken butt", card);
    let turn3 = new Turn("boogers", card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    turn3.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
    expect(turn3.evaluateGuess()).to.equal(false);
  });

  it.skip("should be able to return feedback", function() {
    let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let turn1 = new Turn("not much", card);
    let turn2 = new Turn("chicken butt", card);
    let turn3 = new Turn("boogers", card);
    turn1.giveFeedback();
    turn2.giveFeedback();
    turn3.giveFeedback();
    expect(turn1.giveFeedback()).to.equal("incorrect!");
    expect(turn2.giveFeedback()).to.equal("correct!");
    expect(turn3.giveFeedback()).to.equal("incorrect!");
  });
});
