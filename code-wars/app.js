function getDrinkByProfession(param){
const paramToLower = param.toLowerCase();
console.log(paramToLower);


switch (paramToLower) {
    case "jabroni":
        return "Patron Tequila";
        case "school counselor":
          return "Anything with Alcohol";
        case "programmer":
          return "Hipster Craft Beer";
        case "bike gang member":
          return "Moonshine";
        case "politician":
          return "Your tax dollars";
        case "rapper":
          return "Cristal";

    default:
        return "Beer";
}
}

function rainAmount(mm){
   
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}  mm of water`
    } else {
         return "Your plant has had more than enough water for today!"
    };

   
}
function removeUrlAnchor(url){
  // TODO: complete
  const [baseUrl] = url.split("#");

  return baseUrl;
}




const Fighter = (name, health, damagePerAttack)=> {

  return {health,damagePerAttack,name}
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker === fighter1.name?fighter1:fighter2;
  let defender = attacker === fighter1? fighter2:fighter1;
 
  

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;
    let fightSequence = `${attacker.name} attacks ${defender.name};${defender.name} now has ${defender.health} health`;
    console.log(fightSequence);
    

    if (defender.health <=0) {
        return attacker.name;
    }

    [attacker,defender] = [defender,attacker];
  }
  
}

console.log(declareWinner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Harry"));
