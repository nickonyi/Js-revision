function evaporator(content, evap_per_day, threshold) {
  // Initialize variable days
  let days = 0;
  //calculate the threshold
  let thresholdContent = content * (threshold / 100);
  //calculate how many days it will take for the evaporator to be rendered unusable
  while (content > thresholdContent) {
    content = content * (1 - evap_per_day / 100);
    days++;
  }

  return days;
}

//console.log(evaporator(10, 10, 10));

function sumOfMinimums(arr) {
  // your code here
  //find the minium values in each row and put them into an array
  const minValues = arr.map((row) => Math.min(...row));
  //add them all together
  console.log(minValues);

  const sumMin = minValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sumMin;
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);

var greet = function (name) {
  return `Hello ${name.toUpperCase()}!`;
};
