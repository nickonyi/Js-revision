function replace(s){
    //coding and coding....
    return s.replace(/[aeiouAEIOU]/g,"!");
    
  }


  function multiTable(number) {
    // good luck
    let table = "";
    for (let i = 1; i <=10; i++) {
        table += `${i} * ${number} = ${i*number}\n`;        
    }

    return table.trim();
  };

 

  
 
  
  function take(arr, n) {
    // Your code here
    return arr.slice(0,n);
  }

  

  function position(letter){
    //Write your own Code!
      const letterPos = letter.charCodeAt(0) - 96; 
      return `Position of alphabet: ${letterPos}`;
    }
    console.log(position('c'));
    

    function getEvenNumbers(numbersArray){
      // filter out the odd numbers
    }