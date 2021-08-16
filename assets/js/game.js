var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alerts players the round has started
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    // if player choses to giht, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of playerAttack from enemyHealth and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        //Log a resulting message to the console so we know it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaining."
        );
    
        //Subtract the value of enemyAttack from playerHealth and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so we know it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
    }
    
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        //confirm
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // take their money
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            playerMoney = playerMoney -2;
        }
        //if no (flase), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to chose a valid option. Try again!");
    }
};

fight();