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


function Result() {
    // if (playerScore > computerScore) {
    //     console.log(`Final Score
    //       \nPlayer Score: ${playerScore}
    //       \nComputer Score : ${computerScore}
    //       \nThe player wins the game`);
    // } else {
    //     console.log(`Final Score
    //       \nPlayer Score: ${playerScore}
    //       \nComputer Score : ${computerScore}
    //       \nThe computer wins the game`);
    // }
    if (playerScore > computerScore) {
        p1.textContent = `Final Score`;
        p2.textContent = `Player Score: ${playerScore}`;
        p3.textContent = `Computer Score : ${computerScore}`;
        p4.textContent = `The player wins the game`;
    } else {
        p1.textContent = `Final Score`;
        p2.textContent = `Player Score: ${playerScore}`;
        p3.textContent = `Computer Score : ${computerScore}`;
        p4.textContent = `The computer wins the game`;
    }
}

function disableBtn() {
    RockBtn.disable = true;
    PaperBtn.disable = true;
    ScissorsBtn.disable = true;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerScore === 5 || computerScore === 5) {
        p4.textContent = '';
        Result();
        disableBtn();
        return;
    }

    if (playerSelection === computerSelection) {
        p2.textContent = `Player Score: ${playerScore}`;
        p3.textContent = `Computer Score: ${computerScore}`;
        p4.textContent = 'It is a tie'
    }
    else {
        if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
            playerScore++;
            p2.textContent = `Player Score: ${playerScore}`;
            p3.textContent = `Computer Score: ${computerScore}`;
            p4.textContent = `You win! ${playerSelection} beats ${computerSelection}`;

        } else {
            computerScore++;
            p2.textContent = `Player Score: ${playerScore}`;
            p3.textContent = `Computer Score: ${computerScore}`;
            p4.textContent = `You lose! ${playerSelection} beats ${computerSelection}`;
        }

        if (playerScore === 5 || computerScore === 5) {
            p4.textContent = '';
            Result();
            disableBtn();
        }

    }
}

const RockBtn = document.querySelector("#Rock");
const ScissorsBtn = document.querySelector("#Scissors");
const PaperBtn = document.querySelector("#Paper");
const DivContainer = document.querySelector(".container");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");


RockBtn.addEventListener("click", () => {
    playRound("Rock");
});

PaperBtn.addEventListener("click", () => {
    playRound("Paper");
});

ScissorsBtn.addEventListener("click", () => {
    playRound("Scissors");
});

