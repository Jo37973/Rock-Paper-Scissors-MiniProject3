//WRITE YOUR CODE BELOW

var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P", "S"];

var playtheGame = function() {
    var playerChoice = window.prompt("Please enter R, P, or S:");

    if (!playerChoice) {
        return;
    }

    playerChoice = playerChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    if (playerChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

    } else if (
        (playerChoice === "R" && computerChoice === "S") ||
        (playerChoice === "P" && computerChoice === "R") ||
        (playerChoice === "S" && computerChoice === "P") 
    ) {
        wins++;
        window.alert("You won!");

    } else {
        losses++;
        window.alert("You lost.");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses:" + losses + "\nTies:" + ties
    );

    var playAgain = window.confirm("Do you want to play again?");
    
    if (playAgain) {
        playtheGame();
    }
};

playtheGame();



