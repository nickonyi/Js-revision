multiplicationTable = function (size) {
  // insert code here
  const row = size;
  const col = size;
  const multArr = [];

  for (let i = 0; i < row; i++) {
    multArr[i] = [];

    for (let j = 0; j < col; j++) {
      multArr[i][j] = (i + 1) * (j + 1);
    }
  }

  return multArr;
};

function sumPairs(ints, s) {
  return [0, 0] || undefined;
}
