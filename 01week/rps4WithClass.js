'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class User {
  constructor() {
    this.hand = null;
    this.win = 0;
  }
  reset() {
    this.wins = 0
    this.hands = null
  }
}

class Game {
  constructor() {
    this.user1 = new User()
    this.user2 = new User()
  }

  start() {
    this.user1.reset()
    this.user2.reset()

    this.play()
  }

  play() {

    rl.question('user1 hand: ', (answer1) => {

      this.user1.hand = answer1

      rl.question('user2 hand: ', (answer2) => {

        this.user2.hand = answer2

        const result = this.rockPaperScissors()
        console.log(`${result} user 1: ${this.user1.wins} user 2: ${this.user2.wins}`)

        this.play()
      });
    });
  }
  rockPaperScissors() {
    const hand1 = this.user1.hand
    const hand2 = this.user2.hand
    if (hand1 === hand2) {
      return "It's a tie!";
    }
    else if (hand1 === 'rock' && hand2 === 'scissors') {
      this.user1.wins++
      return "user one wins!"
    }
    else if (hand1 === 'paper' && hand2 === 'rock') {
      this.user1.wins++
      return "user one wins!"
    }
    else if (hand1 === 'scissors' && hand2 === 'paper') {
      this.user1.wins++
      return "user one wins!"
    }
    else if (hand1 === 'scissors' && hand2 === 'rock') {
      this.user2.wins++
      return "user two wins!"
    }
    else if (hand1 === 'rock' && hand2 === 'paper') {
      this.user2.wins++
      return "user two wins!"
    }
    else if (hand1 === 'paper' && hand2 === 'scissors') {
      this.user2.wins++
      return "user two wins!"
    }
  }
}
let game = new Game()
game.start()
