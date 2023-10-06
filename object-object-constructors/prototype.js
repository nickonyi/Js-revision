let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
      }
  };
  let rabbit = {
    jumps: true
  };

  rabbit.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
  };

  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  rabbit.__proto__ = animal; 
  console.log(rabbit.eats);
  rabbit.walk();
  longEar.walk();

  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }

  function sum(a, b) {
    console.log(this === window); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
  }
  // sum() is invoked as a function
  // this in sum() is a global object (window)
  sum(15, 16);     // => 31
  console.log(window.myNumber);