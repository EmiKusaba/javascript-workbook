'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  word = word.toLowerCase().trim()

  let store1 = "";
  let store2 = "";

  for (let i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      store1 = word.slice(i, word.length)
      break
    }
    store2 += word[i]
  }

  if (store2 === "") {
    store2 += "y"
  }
  store2 += "ay"

  return store1 + store2
}

const isVowel = (x) => {
  const vowel = ["a", "e", "i", "o", "u"]

  for (let i = 0; i < vowel.length; i++) {
    if (x === vowel[i]) {
      return true
    }
  }
  
  return false
}

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}