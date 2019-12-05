const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Setup answer
const answer = "HELLO".split("");

// Setup guess array
let guess = answer.map(() => "_");

// Get input
function getPrompt() {
  print(guess);
  rl.question('Input: ', (letter) => {
    main(letter);
    getPrompt();
  });
}

function print(guess) {
  const guessStr = guess.reduce((str, element) => str + " " + element);
  console.log(guessStr);
}

// Check and update guess array
function main(letter) {
  // Update guess array
  guess = guess.map((element, i) => {
    if(element !== "_") {
      return element;
    } else {
      return (answer[i] === letter) ? letter : "_";
    }
  });

  // Check if win
  if(guess.every((element) => element !== "_")) {
    console.log("You win!");
    // Reset guess array
    guess = answer.map(() => "_");
  }
}

getPrompt();