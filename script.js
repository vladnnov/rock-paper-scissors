let playerWin = 0;
let computerWin = 0;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0) {
        computerChoice = 'rock';
    } else if (computerChoice === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playerSelection () {
    let playerChoice = (prompt('Choose rock, paper or scissors')).toLowerCase();
    return playerChoice;
}

function playSingleRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection();


    if(computerChoice === 'rock' && playerChoice === 'rock') {
        console.log('It\'s a draw!');
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        playerWin++;
        console.log('You win! Paper beats rock.')
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        computerWin++;
        console.log('You lost! Rock beats scissors.')
    } else if (computerChoice === 'paper' && playerChoice === 'paper') {
        console.log('It\'s a draw!');
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        computerWin++;
        console.log('You lost! Paper beats rock.')
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playerWin++;
        console.log('You win! Scissors beat paper.')
    } else if (computerChoice === 'scissors' && playerChoice === 'scissors') {
        console.log('It\'s a draw!');
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playerWin++;
        console.log('You win! Rock beats scissors.')
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        computerWin++;
        console.log('You lost! Scissors beat paper.')
    }
}

function game() {
    while(playerWin < 5 && computerWin < 5) {
        playSingleRound();

        if (playerWin === 5) {
            console.log(`Well done! You win. Your score is ${playerWin} and computer score is ${computerWin}.`);
        } else if (computerWin === 5) {
            console.log(`Unfortunately you lost! Your score is ${playerWin} and computer score is ${computerWin}.`);
        }
    }
}

game();