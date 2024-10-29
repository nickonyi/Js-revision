function findEvenIndex(arr)
{
  //Code goes here!
  for (let i = 0; i < arr.length; i++) {
    let leftSide = arr.slice(0,i);
    let rightSide = arr.slice(i+1);
    
    let leftSum = leftSide.reduce((num,acc) => num + acc,0);
    let rightSum = rightSide.reduce((num,acc) => num + acc,0);
       
    if (leftSum === rightSum ) {
        return i;
    }
    
  }

  return -1;
}


//console.log(findEvenIndex([1,2,3,4,3,2,1]));
//console.log(findEvenIndex([1,100,50,-51,1,1]));

function sortArray(array) {
    // Return a sorted array.
   //filter the odd numbers
   const oddNum = array.filter((num) => num%2 !== 0);
   
   
   //sort the oddNumbers
   const sortedOddNum = oddNum.sort((a,b) => a-b);
   
   
   //combine the sorted Odd numbers with the rest of array
   let sortedIndex = 0
   let arrCombine = array.map((num) => {
        if (num % 2 !== 0){
            return sortedOddNum[sortedIndex++];
        }
        return num;
   })
//
   return arrCombine;
  }

//console.log(sortArray([7,1]));
//console.log(sortArray([5, 8, 6, 3, 4]));

///Sort array refactor

const sortArrayRe = (array) => {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2?odd.shift():x);
}

///console.log(sortArrayRe([ 1, 11, 2, 8, 3, 4, 5 ]));

function check(a, x) {
  // your code here
  for (let i = 0; i < a.length; i++) {
      
    if(a[i] === x){
      return true;
    }
  }

  return false;
}

function diamond(n){
   if(n < 0 || n % 2 === 0){
    return null;
   }
let diamondStr = '';
const ascending = [];

for (let i = 1; i <=n; i+=2) {
  ascending.push(i);
}

const decending = ascending.slice(0,-1).reverse();
const diamondArr = [...ascending,...decending];

for (let i = 0; i < diamondArr.length; i++) {
  const spaces = ' '.repeat((n - diamondArr[i])/2);
  diamondStr += spaces + "*".repeat(diamondArr[i]) +"\n";
}

return diamondStr;
}

console.log(diamond(15));

