function Person(name){
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
function Player(name,marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function (){
    console.log(`My marker is '${this.marker}'`);
}

console.log(Object.prototype);

Object.setPrototypeOf(Player.prototype,Person.prototype);
const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName();
player1.getMarker();
