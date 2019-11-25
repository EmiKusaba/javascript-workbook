'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  startStack = stacks[startStack];
  endStack = stacks[endStack];
  endStack.push(startStack.pop());
}

function isLegal(startStack, endStack) {
  startStack = stacks[startStack];
  endStack = stacks[endStack];

  // If startStack is empty, can't move from it
  if (startStack.length == 0) {
    return false;
  }

  // Check that moving piece is smaller than 
  // last piece on endStack

  // If nothing on endStack, always ok to move
  if (endStack.length == 0) {
    return true;
  }

  const movingPiece = startStack[startStack.length - 1];
  const lastPiece = endStack[endStack.length - 1];
  return lastPiece > movingPiece;
}

function checkForWin() {
  for (var key in stacks) {
    if (stacks[key].length == 4) {
      console.log("Tower " + key + "won!");
      return true;
    }
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    console.log("Not an available move. Try again.")
  }
}



function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [], c: [1] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  // My unit tests
  describe('#movePiece()', () => {
    it ('piece should be moved', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      movePiece('a', 'b')
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] })
    });
  });
  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [],
        c: [1]
      };
      assert.equal(isLegal('a', 'c'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [1], c: [4, 3, 2] };
      assert.equal(checkForWin(), false);
    });
  });


} else {

  getPrompt();

}
