function Fighter(context) {
  let name = context.name;
  let damage = context.damage;
  let hp = context.hp;
  let strength = context.strength;
  let agility = context.agility;
  let win = 0;
  let lose = 0;

  this.getName = function() {
    return name
  }
  this.getDamage = function() {
    return damage
  }
  this.getHealth =function() {
    return hp
  }
  this.getStrength = function() {
    return strength
  }
  this.getAgility = function() {
    return agility;
  }

  this.attack = (defender) => {
    const oneHundered = 100;
    const success = oneHundered - (defender.getStrength() + defender.getAgility()) / oneHundered;
    if(Math.random() < success) {
      defender.dealDamage(damage);
      console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
    } else{
      console.log(`${name} attack missed`);
    }
  }

  this.logCombatHistory = () => {
    return `Name: ${name}, Wins: ${win}, Losses: ${lose}`;
  }

  this.heal = (health) => {
    const maxHealth = 100;
    if(hp + health > maxHealth) {
      hp = maxHealth;
    } else {
      hp+= health;
    }
  }

  this.dealDamage = (hurt) => {
    const minHealth = 0;
    if(hp - hurt < minHealth) {
      hp = minHealth;
    } else {
      hp -= hurt;
    }
  }

  this.addWin = () => {
    win++;
  }

  this.addLose = () => {
    lose++;
  }
}

function battle(fighter1, fighter2) {
  const whosWin = (fighter1, fighter2) => {
    if(!fighter1.getHealth()) {
      console.log(`${fighter1.getName()} has won!`);
      fighter2.addWin;
      fighter1.addLose;
      return;
    }
    fighter1.attack(fighter2);
    return whosWin(fighter2,fighter1);
  } 
  if(!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
    return;
  }
  if(!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
    return;
  }
  whosWin(fighter1,fighter2);
}

const myFighter = new Fighter({
  name: 'Maximus', 
  damage: 25, 
  hp: 100, 
  strength: 30, 
  agility: 25
});

const myFighter2 = new Fighter({
  name: 'Commodus', 
  damage: 20, 
  hp: 100, 
  strength: 15, 
  agility: 10
});

let name1 = myFighter.getName();
console.log(name1);
let damage = myFighter.getDamage();
console.log(damage);
let strength = myFighter.getStrength();
console.log(strength);
let agility = myFighter.getAgility();
console.log(agility);
let health = myFighter.getHealth();
console.log(health);

let name2 = myFighter2.getName();
console.log(name2);
let damage2 = myFighter2.getDamage();
console.log(damage2);
let strength2 = myFighter2.getStrength();
console.log(strength2);
let agility2 = myFighter2.getAgility();
console.log(agility2);
let health2 = myFighter2.getHealth();
console.log(health2);

battle(myFighter, myFighter2);
myFighter.logCombatHistory();
myFighter2.logCombatHistory();
battle(myFighter, myFighter2);







