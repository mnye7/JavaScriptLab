

class Computer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  generateAttackDamage() {
    return getRandom(5);
  }

}

class Character extends Computer {
  constructor(name, health, healsRemaining) {
    super(name, health);
    this.healsRemaining = healsRemaining;
    this.wins = 0;
  }
  generateAttackDamage() {
    return getRandom(3);
  }
  heal() {
    this.health += getRandom(10);
    this.healsRemaining--;
  }
}

var startButton = document.getElementById("startButton");
startButton.onclick = function(){
  document.getElementById("game-wrapper").style.display = "block";
  document.getElementById("start-wrapper").style.display = "none";
  startGame();
}



function startGame() {
  // var play = prompt('do you want to play?');
  // if (play.toLowerCase() === 'yes') {
    var userName = prompt('enter your name');
    startCombat(userName);
    // setName(userName);
    // else {
    // console.log('Game Over');
}

var userName = document.getElementById("userName");
function setName(userName){
  playerName.innerText = userName;
}


function startCombat(userName) {
  var user = new Character(userName, 40, 2);
  var grant = new Computer('grant', 10);
  setName(user);
  var attackButton = document.getElementById("attackButton");
  attackButton.onclick = attack;
  function attack(){
    if (attack === 'attack'){
        user.health -= grant.generateAttackDamage();
        grant.health -= user.generateAttackDamage();
        console.log(`${user.name} has ${user.health} health remaining`);
        console.log(`Grant has ${grant.health} health remaining`);

        var playerHealthProgressBar = document.getElementsByClassName("playerHealth")[0]
        playerHealthProgressBar.value = user.health;
      }

    if (grant.health < 1) {
        user.wins++;
        grant.health = 10;
        var message = `${user.name} has 1 victory`;
      }
    if (user.wins >= 1) {
      message = `${user.name} has ${user.wins} victories`;
      console.log(message);
      }
  }


  // while (user.wins < 5 && user.health > 0) {
  //   var attack = prompt('Do you want to attack, heal, or quit?');
  //   if (attack === 'quit') {
  //     console.log('Game Over');
  //     return;
  //   }
  //
  //   if (attack === 'attack') {
  //     user.health -= grant.generateAttackDamage();
  //     grant.health -= user.generateAttackDamage();
  //     console.log(`${user.name} has ${user.health} health remaining`);
  //     console.log(`Grant has ${grant.health} health remaining`);
  //   }
  //   if (attack === 'heal') {
  //     user.heal();
  //     console.log(`${user.name} has healed and has ${user.health}`);
  //   }
  //   if (grant.health < 1) {
  //     user.wins++;
  //     grant.health = 10;
  //     var message = `${user.name} has 1 victory`;
  //   }
  //   if (user.wins >= 1) {
  //     message = `${user.name} has ${user.wins} victories`;
  //     console.log(message);
  //   }
  //   if (user.healsRemaining === 0) {
  //     grant.generateAttackDamage();
  //     user.generateAttackDamage();
  //     console.log(`${user.name} has ${user.health} health remaining`);
  //     console.log(`Grant has ${grant.health} health remaining`);
  //   }
  //
  // }

  if (user.wins === 5) {
    console.log(`${user.name} won`);
  } else {
    console.log('Grant won');
  }
}


// var startButton = document.getElementById("startButton");
// startButton.onclick = function () {
//   document.getElementById("game-wrapper").style.display = "block";
//   document.getElementById("start-wrapper").style.display = "none";
//   startGame();
// }


// var startButton = document.getElementById("startButton");
// startButton.onclick = startGame(){
//   // startGame();
//   document.getElementById("game-wrapper").style.display = "block";
//   document.getElementById("start-wrapper").style.display = "none";
// }





function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

// else {
//   console.log('Game not started, you must type "yes" to begin the game.');
// }

// getRandom();
// startCombat();
