'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class User {
  constructor() {
    this.user1 = user1.trim().toLowerCase()
    this.user2 = user2.trim().toLowerCase()
  }
}
const rockPaperScissors = (user1, user2) => {
// Write code here


if(user1 === user2 ){
  return "It's a tie!";
} 
else if (user1 === 'rock' && user2 === 'scissors'){
  return "user one wins!"
}
else if (user1 === 'paper' && user2 === 'rock'){
  return "user one wins!"
}
else if (user1 === 'scissors' && user2 === 'paper'){
  return "user one wins!"
}
else if (user1 === 'scissors' && user2 === 'rock'){
  return "user two wins!"
}
else if (user1 === 'rock' && user2 === 'paper'){
  return "user two wins!"
}
else if (user1 === 'paper' && user2 === 'scissors'){
  return "user two wins!"
}
}

function getPrompt() {
  rl.question('user1: ', (answer1) => {
    rl.question('user2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}
//Test

if (typeof describe === 'function') {

describe('#rockPaperScissors()', () => {
  it('should detect a tie', () => {
    assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
    assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
    assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
  });
  it('should detect which hand won', () => {
    assert.equal(rockPaperScissors('rock', 'paper'), "user two wins!");
    assert.equal(rockPaperScissors('paper', 'scissors'), "user two wins!");
    assert.equal(rockPaperScissors('rock', 'scissors'), "user one wins!");
  });
  it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
    assert.equal(rockPaperScissors('rOcK', ' paper '), "user two wins!");
    assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "user two wins!");
    assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "user one wins!");
  });
});
} else {

getPrompt();

}
