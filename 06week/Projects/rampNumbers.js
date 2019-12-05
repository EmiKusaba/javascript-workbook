const input = 99999;

function isRamp(num) {
  const numArray = num.toString().split("");
  let last = 0;
  return numArray.every((element) => {
    const elementNum = Number(element);
    const isGTE = elementNum >= last;
    last = elementNum;
    return isGTE;
  });
}

function countRamp(max) {
  let count = 0;
  for(let i = 0; i < max; i++) {
    count += isRamp(i) ? 1 : 0;
  }
  return count;
}

console.log(countRamp(input) + " total ramp numbers less than " + input);