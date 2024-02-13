

var computerNumber;
var computerChoice;
var winOrLose;

var globalTies = 0
var globalWins = 0;
var globalLosses = 0;

// ^ Declaring variables
// computerNumber is the random number between 0 and 2 that the computer generates
// computerChoice is the letter (r, p, s) that the random number is converted to
// winOrLose determines if the user won or lost (false = they lose and true = they won)
// global Ties, Wins, and Losses will be incremented for display at the end of all rounds

function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

// ^ Random # generator


    var numOfRounds = prompt("How many rounds would you like to play?")

    for(var i = 0; i < numOfRounds; i++) {
        let userChoice = prompt("Choose Rock, Paper, or Scissors (type r, p, or s)");

    if(userChoice == "r" || userChoice == "p" || userChoice == "s") {

        let computerNumber = randomNumber(3);
    
        if(computerNumber == 0) {
            var computerChoice = "r";
        } else if(computerNumber == 1) {
            var computerChoice = "p";
        } else if(computerNumber == 2) {
            var computerChoice = "s";
        }
    
        console.log(computerChoice)
    
        
            if(userChoice === "r" && computerChoice === "p") {
            winOrLose = false;
        } else if(userChoice === "r" && computerChoice === "s") {
            winOrLose = true;
        } else if(userChoice === "p" && computerChoice === "r") {
            winOrLose = true;
        } else if(userChoice === "p" && computerChoice === "s") {
            winOrLose = false;
        } else if (userChoice === "s" && computerChoice === "r") {
            winOrLose = false;
        } else if(userChoice === "s" && computerChoice === "p") {
            winOrLose = true;
        }
    
        if(userChoice === computerChoice) {
            alert("It's a tie!");
            globalTies++
        } else if(winOrLose == true){
            alert("You win, you picked " + userChoice + " which beats " + computerChoice);
            globalWins++
        } else if(winOrLose == false) {
            alert("You lose, the computer picked " + computerChoice + " which beats " + userChoice)
            globalLosses++
        }
    } else {
        alert("Oops! Try again! (Enter 'r' for rock, 'p' for paper, or 's' for scissors)")
        i--
        continue;
    }     
        
    }

    alert ("You won " + globalWins + " times, you lost " + globalLosses + " times, you tied " + globalTies + " times!")




      
