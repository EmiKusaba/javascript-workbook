'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  var guessArray = guess.split("");
  var solutionArray = solution.split("");

  var correctLetterLocations = 0;
  for (var i = 0; i < solutionArray.length; ++i) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  var correctLetters = 0;
  for (var i = 0; i < solutionArray.length; ++i) {
    var guessValue = guessArray[i];
    var index = solutionArray.indexOf(guessValue);
    if (index > -1) {
      correctLetters++;
      solutionArray[index] = null;
    }
  }

  return correctLetterLocations + "-" + correctLetters;
}

function mastermind(guess) {
  // your code here
  if (solution === guess) {
    return "You guessed it!";
  }
  var hint = generateHint(guess);
  board.push(guess + " " + hint);

  if (board.length >= 10) {
    return "You ran out of turns!";
  }

  return "Guess again!";
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
