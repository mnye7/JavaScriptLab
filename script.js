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

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

var user;
var grant;
var createBtn = document.getElementById('create');
var userInput = document.querySelector('input');
var gameStatus = document.querySelector('.game-status');

/*** Start button ***/
// startBtn.addEventListener('click', function(){
//   startWrapper.classList.add('hidden');
//   userwrapper.classList.remove('hidden');
//   var userName = userInput.value;
//   startCombat(userName);
// });
var startButton = document.getElementById("startButton");
startButton.onclick = function() {
  document.getElementById("game-wrapper").style.display = "block";
  document.getElementById("start-wrapper").style.display = "none";
  startGame();
}


/** start game **/

function startGame() {
  var userName = prompt('enter your name');
  startCombat(userName);
  getGameStatus();
}

var userName = document.getElementById(".user-name");

function setName(userName) {
  userName.innerText = userName;
}

/** start combat **/
function getGameStatus(){
  var status = `${user.name} has ${user.health} health remaining Grant has ${grant.health} health remaining`;
  gameStatus.innerHtml = status;
}

function startCombat(userName) {

  user = new Character(userName, 40, 2);
  grant = new Computer('grant', 10);
  setName(user);
  var attackButton = document.getElementById("attackButton");
  attackButton.onclick = attack;

  function attack() {
      user.health -= grant.generateAttackDamage();
      grant.health -= user.generateAttackDamage();
      console.log(`${user.name} has ${user.health} health remaining`);
      console.log(`Grant has ${grant.health} health remaining`);

      var playerHealthProgressBar = document.getElementsByClassName("playerHealth")[0]
      playerHealthProgressBar.value = user.health;

      var enemyHealthProgressBar = document.getElementsByClassName("enemyHealth")[0];
      enemyHealthProgressBar.value = grant.health;



function checkForVictory (){
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
  }

  /** heal button **/

  var healButton = document.getElementById("healButton");
  healButton.onclick = heal();

  function heal() {
    user.Health += getRandom(10);
    user.healsRemaining--;
    console.log(`the user has healed and has ${user.health}`);
  }

    if(user.healsRemaining)
      user.heal();
      grant.health -= user.generateAttackDamage();
      // var playerHealCountProgressBar = document.getElementsByClassName("healCount")[0]
      var playerHealCountProgressBar = document.getElementsByClassName("healCount");

      playerHealCountProgressBar.value = user.heal;




  if (user.wins === 5) {
    console.log(`The user has ${user.wins} wins`);
  }
}
  // } else {
  //   console.log('Grant Wins');
  // }


  /** quit game **/
  var quitButton = document.getElementById("quitButton");
  quitButton.onclick = quit;



  function quit() {
    console.log("You have quit the game.")
    return;
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

  //   if (user.wins === 5) {
  //     console.log(`${user.name} won`);
  //   } else {
  //     console.log('Grant won');
  //   }
  // }


  // var startButton = document.getElementById("startButton");
  // startButton.onclick = function () {
  //   document.getElementById("game-wrapper").style.display = "block";
  //   document.getElementById("start-wrapper").style.display = "none";
  //   startGame();
  // }




  // else {
  //   console.log('Game not started, you must type "yes" to begin the game.');
  // }

  // getRandom();
  // startCombat();
