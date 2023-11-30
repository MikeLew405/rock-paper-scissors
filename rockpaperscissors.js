
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


}

playRound(getComputerSelection(), prompt("Pick: Rock, Paper, or Scissors?").toLowerCase);
