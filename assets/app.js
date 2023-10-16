var player = window.prompt("What is your robot's name ?");
var playerHealth = 100;
var playerAttack = 100;

var enemy = "Omega";
var enemyHealth = 100;
var enemyAttack = 100;

// function to run a battle
function fight() {
  alert("Welcome to the Battle Bots Grand Royal " + player);

  console.log((enemyHealth = enemyHealth - playerAttack));
  alert(player + " attacked " + enemy + " !");
  console.log((playerHealth = playerHealth - enemyAttack));
  alert(enemy + " attacked " + player + " !");
  if (playerHealth <= 0) {
    alert(
      "Death is not a hunter unbeknownst to its prey. One is always aware that it lies in wait. Though life is merely a journey to the grave, it must not be undertaken without hope."
    );
  } else {
    alert(player + " is still in the battle");
  }

  if (enemyHealth <= 0) {
    alert(enemy + " EXPLODED !");
  } else {
    alert(enemy + " is not going down !");
  }
  console.log(enemyHealth)
}

fight();
