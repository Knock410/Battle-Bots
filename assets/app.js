var player = window.prompt("What is your robot's name ?");
var playerHealth = 100;
var playerAttack = 50;
var money = 200

var enemy = "Omega";
var enemyHealth = 100;
var enemyAttack = 50;

// function to run a battle
function fight() {

  // Alert to the player welcoming them to the start of the game
  alert("Welcome to the Battle Bots Grand Royal " + player);

  //Window prompt that gathers player's choice to fight or skip the fight 
  var promptFight =  window.prompt("Would you like to Fight or Skip");
  
  // Security Check- If Else statments to show how the code will executed dependent of the players choice
 if(promptFight === "fight" || promptFight === "Fight" || promptFight === "Fight") {
    console.log(promptFight);
    
    //Player interaction with enemy
    console.log((playerHealth = playerHealth - enemyAttack));
    alert(enemy + " attacked " + player + " !");
    
    // Check health of player 
    if (playerHealth <= 0) {
      alert(
        "Death is not a hunter unbeknownst to its prey. One is always aware that it lies in wait. Though life is merely a journey to the grave, it must not be undertaken without hope."
      );
    } else {
      alert(player + " is still in the battle");
    }


  // Enemy interaction with player
  console.log((enemyHealth = enemyHealth - playerAttack));
  alert(player + " attacked " + enemy + " !");

    // Check health of enemy 
    if (enemyHealth <= 0) {
      alert(enemy + " EXPLODED !");
    } else {
      alert(enemy + " is not going down !");
    }
    console.log(enemyHealth);
  }


    
  

  // If player choses to skip 
  else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip"){
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    // if yes(true), leave fight 
    if(confirmSkip){
    alert(player + " has chosen to avoid this battle ");
    //Money was subtracted 
    money = money - 20 
    alert(player + " has payed a fine. " + player + " has " + money + " remaing"); 
  }
//if no (false), ask question again by running fight() again
  else {
fight();
    
  }
// if player did not chose the first or second option in the initial prompt  
} else {
  alert("Make a valid choice! Are you in or are you out ?");
}
 }; //end of fight function 

// start button- this is needed to start the fight function 
fight();
