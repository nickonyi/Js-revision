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
  name = name.toLowerCase();
  return `Hello ${name.slice(0, 1).toUpperCase() + name.slice(1)}!`;
};

//console.log(greet('BILLY'));

function pipeFix(numbers) {
  const newArr = [];

  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newArr.push(i);
  }

  return newArr;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([-1, 4]));
