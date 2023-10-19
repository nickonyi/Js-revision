//function C (){
//
//}
//C.prototype = { prototype_prop : "proto"};
//const c = new C();
//console.log(c.constructor);
//console.log(c.constructor === C);
//c.constructor = C;
//console.log(C.prototype);
//console.log(c.constructor);
//console.log(c.constructor === C);
//console.log(c);
//console.log(C);
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); 
  console.log(jeff.age);// 'jeff'
  
  jeff.sayHello();

  const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food});
 // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }