multiplicationTable = function (size) {
  // insert code here
  const row = size;
  const col = size;
  const multArr = [];

  for (let i = 0; i < row; i++) {
    multArr[i] = [];
    //To store the best pair found
    for (let j = 0; j < col; j++) {
      multArr[i][j] = (i + 1) * (j + 1);
    }
  }

  return multArr;
};

function sumPairs(ints, s) {
  let bestPair = null;
  let bestSecondIndex = Infinity;

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        if (j < bestSecondIndex) {
          bestPair = [ints[i], ints[j]];
          bestSecondIndex = j;
        }
      }
    }
  }
  if (bestPair !== null) {
    return bestPair;
  }
  return undefined;
}

//console.log(sumPairs([0, 2, 0], 0));
//console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

//console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));

var sum_pairs = function (ints, s) {
  var seen = {};
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
  }
};

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));
console.log(sum_pairs([20, -13, 40], -7));
