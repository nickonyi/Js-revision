function add(a,b){
    return a + b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return  a * b;
}

function mod(a,b){
    return a % b; 
}
   
function exponent(a,b){
    return a ** b;
}
    
function subt(a,b){
    return a - b;
}


function longest(s1, s2) {
    // your code
    const combineArr = [...s1,...s2];
    const sortArr =combineArr.sort();
    const uniqueArray = [...new Set(sortArr)];

    return uniqueArray.join("");
  }

  console.log(longest("aretheyhere", "yestheyarehere"));
  