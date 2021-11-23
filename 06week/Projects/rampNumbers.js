const input = 99999;

function isRamp(num) {
  // Convert num to array of digit strings
  const numArray = num.toString().split("");
  // Define variable 'last' to contain the last digit
  // Initialize to 0 because the first digit is always valid
  let last = 0;
  return numArray.every((element) => {
    // Convert string element to actual number
    const elementNum = Number(element);
    // If elementNum >= last, then isGTE is True
    // Otherwise, isGTE is False
    const isGTE = elementNum >= last;
    // Set last to current elementNum
    // so that we can compare it against the next element
    last = elementNum;

    return isGTE;
  });
}

function countRamp(max) {
  // Initialize count of ramp numbers to 0
  let count = 0;
  // Loop through all numbers from 0 to 1 less than the max
  for(let i = 0; i < max; i++) {
    // If i is a ramp number, add 1 to count, otherwise add 0 (same as not adding)
    count += isRamp(i) ? 1 : 0;
  }
  return count;
}

console.log(countRamp(input) + " total ramp numbers less than " + input);