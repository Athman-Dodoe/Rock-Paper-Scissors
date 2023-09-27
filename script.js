const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const resultsElement = document.querySelector('#results');
const playerPoints = document.querySelector('#player-points');
const computerPoints = document.querySelector('#computer-points');
const winner = document.querySelector('#winner');
const computerOption = document.querySelector('#computer-selection');
const playerOption = document.querySelector('#player-selection');
const showResult = document.querySelector('#show-result');
const gameOver = document.querySelector('.game-over');
let points = document.querySelector('.points');
let gameIsOver = false;


let player = 0;
let computer = 0;

rockBtn.addEventListener('click', function() {
    if (gameIsOver) return;

    const computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    let results = playRound(playerSelection, computerSelection);

    playerOption.innerText = `Player : ${playerSelection}`;
    computerOption.innerText = `Computer : ${computerSelection}`;
    showResult.innerText = results;

    if (results === 'You win'){
        player += 1;
        showResult.style.color = 'green';
    }else if(results !== "Its a draw!"){
        computer += 1;
        showResult.style.color = 'red';
    }else {
        showResult.style.color = 'black';
    }
    
    updateWinsDisplay()
});


paperBtn.addEventListener('click', function() {
    if (gameIsOver) return;

    const computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    let results = playRound(playerSelection, computerSelection);

    playerOption.innerText = `Player : ${playerSelection}`;
    computerOption.innerText = `Computer : ${computerSelection}`;
    showResult.innerText = results;

    if (results === 'You win'){
        player += 1;
        showResult.style.color = 'green';
    }else if(results !== "Its a draw!"){
        computer += 1;
        showResult.style.color = 'red';
    }else {
        showResult.style.color = 'black';
    }

    updateWinsDisplay()
});


scissorBtn.addEventListener('click', function() {
    if (gameIsOver) return;

    const computerSelection = getComputerChoice();
    let playerSelection = 'scissor';
    let results = playRound(playerSelection, computerSelection);

    playerOption.innerText = `Player : ${playerSelection}`;
    computerOption.innerText = `Computer : ${computerSelection}`;
    showResult.innerText = results;
   
    if (results === 'You win'){
        player += 1;
        showResult.style.color = 'green';
    }else if(results !== "Its a draw!"){
        computer += 1;
        showResult.style.color = 'red';
    }else {
        showResult.style.color = 'black';
    }

    updateWinsDisplay()
});



function getComputerChoice() {
    const choices = ["rock","paper","scissor"]
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
 }


 function playRound (playerSelection, computerSelection){  

    if (playerSelection === computerSelection) {
        return "Its a draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        return("You win")
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You win")
    }

    else if (playerSelection === "scissor" && computerSelection === "paper") {
        return("You win")
    }

    else {
        return(`You Loose! ${computerSelection} beats ${playerSelection}`)
    }

 }
 

function updateWinsDisplay() {
    playerPoints.textContent = `Player Points: ${player}`;
    computerPoints.textContent = `Computer Points: ${computer}`;

    if (player === 5 || computer === 5) {
        gameIsOver = true;

        let GameOverBtn = document.createElement('p');
        GameOverBtn.classList.add('end-game');
        GameOverBtn.textContent = 'Game Over!';
        gameOver.appendChild(GameOverBtn);

        if (player < computer){
            winner.innerText = 'You Lost! The Computer is the winner ';
            winner.style.color = 'red';

        }else {
            winner.innerText = 'You Have Won The Game';
            winner.style.color = 'green';
        }

        let playAgain = document.createElement('btn');
        playAgain.classList.add('play-again');
        playAgain.innerText = 'play again';
        gameOver.appendChild(playAgain);

        playAgain.addEventListener('click', function() {
            gameIsOver = false;
            player = 0;
            computer = 0;
            updateWinsDisplay();
            gameOver.removeChild(GameOverBtn);
            gameOver.removeChild(playAgain); 
            playerOption.innerText = '';
            computerOption.innerText = '';
            showResult.innerText = '';
            winner.innerText = '';

        });
    }
}

 



