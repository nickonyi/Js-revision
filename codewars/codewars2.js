function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

function longest(s1, s2) {
  // your code
  const combineArr = [...s1, ...s2];
  const sortArr = combineArr.sort();
  const uniqueArray = [...new Set(sortArr)];

  return uniqueArray.join('');
}

function getSum(a, b) {
  //Good luck!
  if (a === b) {
    return a || b;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let result = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

function simpleMultiplication(number) {
  // your code........
  return number % 2 ? number * 9 : number * 8;
}

function noBoringZeros(n) {
  // your code

  return parseInt(n.toString().replace(/0+$/, ''), 10);
}

//console.log(noBoringZeros(-105));

function digitize(n) {
  //code here
  const arrNumber = String(n).split('');
  const reverseArray = arrNumber.sort((a, b) => b - a);
  return reverseArray.map(Number);
}

console.log(digitize(35231));
