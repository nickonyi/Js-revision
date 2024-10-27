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
  }

