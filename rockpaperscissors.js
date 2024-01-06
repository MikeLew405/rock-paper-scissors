
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
    roundResults.textContent = `user selected ${userSelection}, computer selected ${computerSelection}.\n`;
    if (userSelection == "rock") {
        if (computerSelection == userSelection) {
            roundResults.textContent += "TIE! Restarting round";
            //return (playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "paper") {
            roundResults.textContent += `You lose! paper beats rock`;
            return "computer";
        } else {
            roundResults.textContent += "You win! Rock beats Scissors";
            return "user";
        }
    } else if (userSelection == "paper") {
        if (computerSelection == userSelection) {
            roundResults.textContent += "TIE! Restarting round";
            //return (playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "scissors") {
            roundResults.textContent += "You lose! Scissors beats Paper";
            return "computer";
        } else {
            roundResults.textContent += "You win! Paper beats Rock";
            return "user";
        }
    }
    else if (userSelection == "scissors") {
        if (computerSelection == userSelection) {
            roundResults.textContent += "TIE! Restarting round";
            //return (playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase()));
        } else if (computerSelection == "rock") {
            roundResults.textContent += "You lose! Rock beats Scissors";
            return "computer";
        } else {
            roundResults.textContent += "You win! Scissors beats Rock";
            return "user";
        }
    } else {
        roundResults.textContent += "Oops, something went terribly wrong getting the user's selection!";
    }
}

function game() {
    let winner;

    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            winner = playRound(getComputerSelection(), button.className);

            if (winner == "computer") {
                computerScore++;
                if (computerScore == 5) {
                    gameResults.textContent = "You lose the game!";
                }
            } else if (winner == "user") {
                userScore++;
                if (userScore == 5) {
                    gameResults.textContent = "You win the game!";
                }
            }
            currentScore.textContent = `Computer Score: ${computerScore}\nUser Score: ${userScore}`;
        });
    });
}

let userScore = 0;
let computerScore = 0;
const gameButtons = document.querySelectorAll('button');
const gameStats = document.querySelector('.game-stats');

const currentScore = document.createElement('p');
gameStats.append(currentScore);
const roundResults = document.createElement('p');
gameStats.append(roundResults);
const gameResults = document.createElement('p');
gameStats.append(gameResults);

game();
