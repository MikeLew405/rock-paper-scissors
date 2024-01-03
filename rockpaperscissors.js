
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
            //return (playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "paper") {
            console.log("You lose! paper beats rock");
            return ("computer");
        } else {
            console.log("You win! Rock beats Scissors");
            return ("user");
        }
    } else if (userSelection == "paper") {
        if (computerSelection == userSelection) {
            console.log("TIE! Restarting round");
            //return (playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "scissors") {
            console.log("You lose! Scissors beats Paper");
            return ("computer");
        } else {
            console.log("You win! Paper beats Rock");
            return ("user");
        }
    }
    else if (userSelection == "scissors") {
        if (computerSelection == userSelection) {
            console.log("TIE! Restarting round");
            //return (playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "rock") {
            console.log("You lose! Rock beats Scissors");
            return ("computer");
        } else {
            console.log("You win! Scissors beats Rock");
            return ("user");
        }
    } else {
        console.log("Oops, something went terribly wrong getting the user's selection!");
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    let winner = playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase());
    if (winner == "computer") {
        computerScore++;
        console.log("You lose the game!");
    } else {
        userScore++;
        console.log("You win the game!");
    }
}

const gameButtons = document.querySelectorAll('button');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerSelection(), button.className);
    });
});

//game();
