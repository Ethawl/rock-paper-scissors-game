let playerScore = 0;
let computerScore = 0;

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function getComputerChoice() {
    const choiced = ['Rock', 'Paper', 'Scissors'];
    return choiced[randomNumber()];
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Make a move between these tree: Rock, Paper, or Scissors", '');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log(`Final Score
      \nPlayer Score: ${playerScore}
      \nComputer Score : ${computerScore}
      \nThe player wins the game`);

    } else if (computerScore > playerScore) {
        console.log(`Final Score
      \nPlayer Score: ${playerScore}
      \nComputer Score : ${computerScore}
      \nThe computer wins the game`);
    } else {
        console.log('It is a tie');
    }


}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 'It is a tie';
    }
    else if
        ((playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') ||
        (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') ||
        (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock')
    ) {
        playerScore++;
        console.log(`Player Score: ${playerScore}\n Computer Score: ${computerScore}`);
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        computerScore++;
        console.log(`Player Score: ${playerScore}\n Computer Score: ${computerScore}`);
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

playGame()