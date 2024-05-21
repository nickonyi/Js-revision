function CreateUser(name){
  const discordName = '@' + name;

  let reputation = 0;

  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

function CreatePlayer(name,level){
 const user = CreateUser(name);

 const increaseLevel = () => level++;

 return Object.assign({},user,{level,increaseLevel});
}

const omwami = CreatePlayer('omwami', 1);
omwami.giveReputation();
omwami.giveReputation();


console.log(omwami.getReputation());
omwami.increaseLevel();
console.log(omwami.level);
console.log(omwami.discordName);