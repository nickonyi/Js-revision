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



