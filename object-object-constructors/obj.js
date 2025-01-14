const playerOne = {
    name:"Tim",
    marker:"x"
}

const playerTwo = {
    name:"Damian",
    marker:"o"
} 


const printPlayer = (player) => {
    return player.name;
}

console.log(printPlayer(playerOne));
console.log(printPlayer(playerTwo));


function Player(name,marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = ()=> {
        console.log("Hi, my name is " + this.name);
        
    }
}

const player3 = new Player('Mushiri',"x");
console.log(printPlayer(player3));
player3.sayName();

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = ()=> {
        return  this.title + " by " + this.author + this.pages+ " pages, "+ this.read +" yet";

    }
}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien ", "295", "not read");


Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 Player.prototype.dbook = "Dbook is the goat!!!"
 


const playerFour = new Player("Dbook","x");

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
  

console.log(calculator.mul(14,5534));
console.log(calculator.add(21,32));

