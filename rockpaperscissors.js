
function getComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3);
    
    switch (computerSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(computerSelection, userSelection) {
    console.log(`user selection = ${userSelection}, computer selection = ${computerSelection}`);
    if (userSelection == "rock") {
        if (computerSelection == userSelection) {
            console.log("TIE! Restarting round");
            return(playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "paper") {
            return("You lose! paper beats rock");
        } else {
            return("You win! Rock beats Scissors");
        }
    } else if (userSelection == "paper") {
        if (computerSelection == userSelection) {
            console.log("TIE! Restarting round");
            return(playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "scissors") {
            return("You lose! Scissors beats Paper");
        } else {
            return("You win! Paper beats Rock");
        }
    }
    else if(userSelection == "scissors") {
        if (computerSelection == userSelection) {
            console.log("TIE! Restarting round");
            return(playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "rock") {
            return("You lose! Rock beats Scissors");
        } else {
            return("You win! Scissors beats Rock");
        }
    } else {
        console.log("Oops, something went terribly wrong getting the user's selection!");
    }
}

console.log(playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
