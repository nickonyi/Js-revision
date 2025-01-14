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
}
