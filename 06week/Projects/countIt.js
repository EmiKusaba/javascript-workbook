// import { strict } from "assert";

let word = " Hello world! ";

// var array = word.split('');
// console.log(array);

function letterCount(str) {

const charMap = {};

var lowerCased = str.trim().toLowerCase();
var newStr = lowerCased.replace(/\s+/g, '');
var newStr2 = newStr.replace(/[^\w\s]/gi, '');
var array = newStr2.split('');


array.forEach(function(char) {

if (charMap[char]){
charMap[char]++;
// console.log(charMap);
} else {
charMap[char] = 1;
}

})
return charMap
}

console.log(letterCount(word));
