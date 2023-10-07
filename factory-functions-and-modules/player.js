const Player = (name, level) => {
    let health = level * 2;
    const getHealth = () => health;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        console.log('You are dead mah nigga!');
    }
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die();
        }
    }
    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    }
    return { getHealth, attack, damage, getLevel, getName }
}

const drake = Player('drake', 11);
const kendrick = Player('k-dot', 11);
drake.attack(kendrick);
console.log(drake.getHealth());
console.log(kendrick.getHealth());
kendrick.attack(drake);

const Person = (name) => {
    const sayName = () => `My name is ${name}`;
    const sayGreetings = () => console.log(`${sayName()} and I am saying hello there!`);
    return { sayGreetings }
}

const Nerd = (name) => {
    const prototype = Person(name);
    const doNerdyStaff = () => console.log(`Something nerdy`);
    return Object.assign({}, prototype, doNerdyStaff);
}

const nick = Nerd('nick');
//nick.sayName();
nick.sayGreetings();