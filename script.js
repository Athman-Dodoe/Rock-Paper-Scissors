let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissor');
let resultsElement = document.getElementById('#results');

rockBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    let results = playRound(playerSelection, computerSelection);
    let li = document.createElement('li');
    li.innerText = `computerSelection: ${computerSelection} Results: ${results}`;
    resultsElement.appendChild(li);
    
    
});


paperBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    let results = playRound(playerSelection, computerSelection);
    let li = document.createElement('li');
    li.innerText = `computerSelection: ${computerSelection} Results: ${results}`;
    resultsElement.appendChild(li);
});


scissorBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'scissor';
    let results = playRound(playerSelection, computerSelection);
    let li = document.createElement('li');
    li.innerText = `computerSelection: ${computerSelection} Results: ${results}`;
    resultsElement.appendChild(li);
   
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


