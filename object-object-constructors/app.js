function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Add greet method to the Hero prototype


Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}
const hero1 = new Hero('Darian', 3);

console.log(hero1.greet());

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
    // Chain constructor with call
    Hero.call(this, name, level);

    // Add a new property
    this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}


Warrior.prototype.attack = function() {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}.`;
}
const warrior1 = new Warrior('Olatunji', 4, 'semi automatic corobusta');
console.log(warrior1.__proto__);
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below



console.log(warrior1.name);
console.log(warrior1.weapon);
console.log(warrior1.greet());
console.log(warrior1.__proto__);
console.log(warrior1 instanceof Warrior);