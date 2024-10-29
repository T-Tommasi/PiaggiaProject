//Game controls
const startGame = document.querySelector('#newGame');
const reset = document.querySelector('#reset');
const selections = ['rock', 'paper', 'scissors']

//Controls for the game
const selectionButtons = document.querySelectorAll('.gameBoard>button')

//The actual game board to draw the player and computer choices
const display = document.querySelector('.screen');
let round = document.querySelector('#roundNumber');
let playerScore = document.querySelector('#pcWon');
let playerLoss = document.querySelector('#pcLoss');


//Various variables usefull for production, to be categorized later on
let playerChoice = null;
let computerChoice = '';
let status = '';

//Function for randomly selecting the AI play
function pcChoice() {
    let choice = Math.floor(Math.random()*selections.length);
    let computerSelection = null
    if (choice === 0) {
        computerSelection = scissors
    } else if (choice === 1) {
        computerSelection = paper
    } else if (choice === 2) {
        computerSelection = rock
    }
    return computerSelection
}

function drawSelection(sign) {
    
}

function playRound (playerChoice) {
    computerSelection = pcChoice();
    if (computerSelection === scissors && playerChoice == rock || computerSelection == rock && playerChoice == paper || computerSelection == paper && playerChoice == scissors ) {
        win();
        return;
    } else if (computerSelection === playerChoice) {
        draw();
        return;
    } else if (computerSelection === rock && playerChoice === scissors || computerSelection === paper && playerChoice === rock || computerSelection === scissors && playerChoice == paper) {
        lose();
        return;
    }
}

//Function for player choice

function registerChoice () {
    if(this == paper) {
        playerChoice = 'Paper!'
    } else if (this == rock) {
        playerChoice = 'Rock!'
    } else if (this == scissors) {
        playerChoice = 'Scissors!'
    }
}

selectionButtons.forEach(selectionButtons => {selectionButtons.addEventListener('click', registerChoice)});
