const { start } = require("repl")

//user
class User {
  constructor() {
    this.hand = null
    this.wins = 0
  }
  reset() {
    this.hand = null
    this.wins = 0
  }
}

//game

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

  rockpapersissors() {

    const hand1 = this.user1.hand
    const hand2 = this.user2.hand
    if (hand1 === hand2) {
      return "It is a tie"
    } else if (hand1 === "rock" && hand2 === "paper"){
      this.user2.wins++
      return "hand2 win"
    }

  }
}
