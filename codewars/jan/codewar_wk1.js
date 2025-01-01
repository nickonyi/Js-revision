multiplicationTable = function (size) {
  // insert code here
  const row = size;
  const col = size;
  const multArr = [];

  for (let i = 0; i < row; i++) {
    multArr[i] = [];

    for (let j = 0; j < col; j++) {
      multArr[i][j] = i * col + j + 1;
    }
  }

  return multArr;
};

console.log(multiplicationTable(6));
