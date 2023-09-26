let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissor');
let resultsElement = document.getElementById('results');
let playerWinsElement = document.getElementById('playerWins');
let computerWinsElement = document.getElementById('computerWins');
let winner = document.getElementById('winner');
let playerWins = 0;
 let computerWins = 0;

rockBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    let results = playRound(playerSelection, computerSelection);

    let li = document.createElement('li');
    li.innerText = `computerSelection: ${computerSelection} Results: ${results}`;
    resultsElement.appendChild(li);

    if (results === 'You win'){
        playerWins += 1;
    }else if (results !== "Its a draw!"){
        computerWins += 1;
    }
    
    updateWinsDisplay()
});


paperBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    let results = playRound(playerSelection, computerSelection);

    let li = document.createElement('li');
    li.innerText = `computerSelection: ${computerSelection} Results: ${results}`;
    resultsElement.appendChild(li);

    if (results === 'You win'){
        playerWins += 1;
    }else if (results !== "Its a draw!"){
        computerWins += 1;
    }

    updateWinsDisplay()
});


scissorBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'scissor';
    let results = playRound(playerSelection, computerSelection);

    let li = document.createElement('li');
    li.innerText = `computerSelection: ${computerSelection} Results: ${results}`;
    resultsElement.appendChild(li);
   
    if (results === 'You win'){
        playerWins += 1;
    }else if (results !== "Its a draw!"){
        computerWins += 1;
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
    if (playerWins === 5 || computerWins === 5) {
        playerWinsElement.textContent = `Player Wins: ${playerWins}`;
        computerWinsElement.textContent = `Computer Wins: ${computerWins}`;

        if (playerWins < computerWins){
            winner.innerText = 'The Computer is the winner ';
        }else {
            winner.innerText = 'The Player is the winner ';
        }
    }
}

 



