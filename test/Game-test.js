const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");
const Game = require("../src/Game.js");

describe("Game", function() {

  it("should be a function", function() {
    expect(Game).to.be.a("function");
  })

  it("should keep track of the current round", function() {
    let game = new Game;
    game.start();
    expect(game.currentRound).to.be.a.instanceof(Round);
  })
})
