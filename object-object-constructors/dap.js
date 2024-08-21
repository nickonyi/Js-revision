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


  console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") );
  console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));

  function dutyFree(normPrice, discount, hol){
    discount = discount /100;    
    const savings = normPrice * discount;
    return Math.floor(hol/savings);
  }

  console.log(dutyFree(24,35,3000));