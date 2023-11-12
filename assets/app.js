var player = window.prompt("What is your robot's name ?");
var playerHealth = 100;
var playerAttack = 25;
var money = 200;

//Array of enemy names
var enemyNames = ["Alpha", "Omega", "Gamma"];
// var greatOne = "Sable"
console.log(enemyNames);
enemyAttack = 25;
// enemyHealth = 100;

// function to run a battle
var fight = function (enemyName) {
  while (enemyHealth > 0) {
    // Alert to the player welcoming them to the start of the game
    // alert("Welcome to the Battle Bots Grand Royal " + player);

    //Window prompt that gathers player's choice to fight or skip the fight
    var promptFight = window.prompt("Would you like to Fight or Skip");

    // Security Check- If Else statments to show how the code will executed dependent of the players choice
    if (
      promptFight === "fight" ||
      promptFight === "Fight" ||
      promptFight === "Fight"
    ) {
      // console.log(promptFight);

      //Player interaction with enemy

      alert(enemyName + " attacked " + player + " !");
      console.log(enemyName + " attacked " + player + " !");
      console.log((playerHealth = playerHealth - enemyAttack));
      console.log(player + " has " + playerHealth + " health remaining");

      // Check health of player
      if (playerHealth <= 0) {
        console.log(player + " has died ");
        alert(
          "Death is not a hunter unbeknownst to its prey. One is always aware that it lies in wait. Though life is merely a journey to the grave, it must not be undertaken without hope."
        );
      } else {
        console.log(player + " survived");
        alert(player + " is still in the battle");
      }

      // Enemy interaction with player

      alert(player + " attacked " + enemyName + " !");
      console.log(player + " attacked " + enemyName + " !");
      console.log((enemyHealth = enemyHealth - playerAttack));
      console.log(
        pickedEnemyName + " has " + enemyHealth + " health remaining"
      );
      // Check health of enemy
      if (enemyHealth <= 0) {
        console.log(enemyName + " EXPLODED !");
      } else {
        console.log(enemyName + " is not going down !");
      }
      console.log(enemyHealth);
    }

    // If player choses to skip
    else if (
      promptFight === "skip" ||
      promptFight === "SKIP" ||
      promptFight === "Skip"
    ) {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes(true), leave fight
      if (confirmSkip) {
        alert(player + " has chosen to avoid this battle ");
        //Money was subtracted
        money = money - 20;
        alert(
          player + " has payed a fine. " + player + " has " + money + " remaing"
        );
      }
      //if no (false), ask question again by running fight() again
      else {
        fight();
      }
      // if player did not chose the first or second option in the initial prompt
    } else {
      alert("Make a valid choice! Are you in or are you out ?");
    }
  } //end of fight function
};

// for([initial expression]; [condition]; [increment expression]) {statement}
// for(var i = 0; i < enemyNames.length; i++){
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + "index");
// }

// var goons = enemyNames[i];

// // start button- this is needed to start the fight function( Code is like building a machine and hitting the start button at the end )
// Calls the fight function multiple times with a new fighter each times
//enemyHealth variable within the for loop allows to reset the health for a new robot added
for (var i = 0; i < enemyNames.length; i++) {
  // debugger;
  pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
