function countSheeps(sheep) {
    // TODO
    const count = sheep.filter((x) => x === true).length;

    return count;
  }


  var findAverage = function (nums) {
    // Code here
    const sum = nums.reduce((accumalotor,currentValue) => accumalotor + currentValue,0);

    return sum / nums.length;
  }

  function sumDigits(number) {
    const absoluteVal = Math.abs(number);
    const stringVal = absoluteVal.toString();
    let sumDigit = 0;

    for (const digit of stringVal) {
         sumDigit += parseInt(digit,10)
    }

    return sumDigit;
  }


  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const parseDate = (date) => new Date(date);  
    
    if (enteredCode !== correctCode){
        return false;
      } else {
        const expirationDateStr = parseDate(expirationDate);
        const currentDateStr = parseDate(currentDate);

        return currentDateStr <= expirationDateStr;
      }
  }


  //console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") );
  //console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));

  function dutyFree(normPrice, discount, hol){
    discount = discount /100;    
    const savings = normPrice * discount;
    return Math.floor(hol/savings);
  }

 

  function nearestSq(n){
    // find the square number of the number n

    const squareN = Math.sqrt(n);
    const roundD = Math.floor(squareN);
    const roundUp = Math.ceil(squareN);
    const roundDSqr = Math.pow(roundD,2);
    const roundUpSqr = Math.pow(roundUp,2);
  
    if(n - roundDSqr <  roundUpSqr - n) {
      return roundDSqr;
    }

    return roundUpSqr;
}

//Refactored code
function nearestSqRef(n){
  // find the square number of the number n

  return Math.pow(Math.round(Math.sqrt(n)),2)
}




function findUniqer(arr) {

  // do 
  const sortArr = arr.sort((a,b) => a - b); 
 for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i] !== sortArr[i+1]) {
           return sortArr[i + 1];
      }
 }
}

function findUniq(arr) {
  // Sort the array
  const sortArr = arr.sort((a, b) => a - b);

  // If the first two elements are different, the first one is unique
  if (sortArr[0] !== sortArr[1]) {
    return sortArr[0];
  } else {
    // Otherwise, the last one is unique
    return sortArr[sortArr.length - 1];
  }
}





function square(n){
  return n * n;
}


const uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  
  const arraySplit = typeof iterable === "string"?iterable.split(""):iterable;
  const arrayEnd = [];

  for (let i = 0; i < arraySplit.length; i++) {
       if(arraySplit[i] != arraySplit[i+1]){
           arrayEnd.push(arraySplit[i]);
       }
    
  }

  return arrayEnd;
}

//console.log(uniqueInOrder('AAAABBBCCDAABBB'));
//console.log(uniqueInOrder('ABBCcAD'));
//console.log(uniqueInOrder([1,2,2,3,3]));

function combat(health, damage) {
  // Write your code here
  if(health - damage < 0){
    return 0;
  }

  return health - damage;
}


function largestPairSum (numbers) {
  //TODO: Write your Code here
  let sortNumbers = numbers.sort((a,b) => b - a);
  return sortNumbers[0] + sortNumbers[1];

}
//console.log(largestPairSum([10, 14, 2, 23, 19]));
//console.log(largestPairSum([99, 2, 2, 23, 19]));
//console.log(largestPairSum([-100,-29,-24,-19,19]));
console.log(largestPairSum([-10, -8, -16, -18, -19]));

const number = (busStops) => {
  let peopleOn = 0;
  let peopleOff = 0;

  for (let i = 0; i < busStops.length; i++) {
     peopleOn += busStops[i][0];
     peopleOff += busStops[i][1];
  }

  return peopleOn - peopleOff;
}

//console.log(number([[10,0],[3,5],[5,8]]));


function multipleOfIndex(array) {
  // good luck
  const arrayEnd = [];

  for (let i = 0; i < array.length; i++) {
    if(i === 0 && array[i] === 0){
      arrayEnd.push(i);
    } 
       if(array[i] % i === 0){
          arrayEnd.push(array[i]);
       }
    
  }

  return arrayEnd;
}

//console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
//console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));
//console.log(multipleOfIndex([0, 2, 3, 6, 9]));

function warnTheSheep(queue) {
    for (let i = queue.length -1; i < queue.length; i--) {
      if (queue[queue.length -1] === "wolf") {
          return "Pls go away and stop eating my sheep";
      } else if(queue[i] === "wolf"){
         return `Oi! Sheep number ${(queue.length - 1)- queue.indexOf("wolf")}! You are about to be eaten by a wolf!`
      }
      
    }
}

//console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
//console.log(warnTheSheep(["sheep", "sheep","sheep", "sheep", "wolf", "sheep"]));
//console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));


function litres(time) {
 const timeH = time * 60;
  return Math.floor((timeH*0.5)/60);
}

//console.log(litres(1787));

function addLength(str) {
  //start-here
 const splitArr = str.split(' ');
 for (let i = 0; i < splitArr.length; i++) {
       splitArr[i] = `${splitArr[i]} ${splitArr[i].length}`;
 }

 return splitArr;
 
  }
  
  function calculateArea(A) {
  // Calculate the radius using the arc length formula
  const r = (2 * A) / Math.PI;
  
  // Calculate the area of the square
  const area = r * r;
  
  // Return the area rounded to two decimal places
  return +area.toFixed(2);
}

  function hello(name) {
    if(name === ""){
      return "Hello, World!";
    }

    name = name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();

  return "Hello," + name+"!";
}

function mouthSize(animal) {
  // code here
  if(animal.toLowerCase() === "alligator"){
     return "small"
  }

  return "wide";
}
  
  function findSmallestInt(arr) {
  //your code here
  return Math.min(...arr);
}

//console.log(findSmallestInt([78,56,232,12,8]));

function twoSort(s) {
   s = s.sort();
   const firstValue = s[0];
   let result = '';

   for (let i = 0; i < firstValue.length; i++) {
       result += firstValue[i];

       if (i !== firstValue.length - 1) {
            result += "*".repeat(3);
       }
    
   }

   return result;
}


const encryptThis = (text) => {
  let plainArr = text.split(" ");
  let cipherText = '';
  
  for (let i = 0; i < plainArr.length; i++) {
       // Remove the trailing space
       let word = plainArr[i];
       let asciicode = word.charCodeAt(0);
       
       if(word.length > 2){
          word = asciicode + word[word.length -1] + word.slice(2,-1) + word[1];
       } else if (word.length === 2) {
           word = asciicode + word[1];
       } else {
        word = asciicode;
       }
       cipherText += word + ' ';
  }
  

  return cipherText.trim();
}



console.log(encryptThis("A wise old owl lived in an oak"));

function noOdds( values ){
  // Return all non-odd values

  return values.filter((num) => num % 2 === 0);
}

console.log(noOdds([0,1,2,3,4]));
