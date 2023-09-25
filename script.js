let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissor');

rockBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", computerSelection);
    let results = playRound(playerSelection, computerSelection);
    console.log(results);
    
});


paperBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", computerSelection);
    let results = playRound(playerSelection, computerSelection);
    console.log(results);
});


scissorBtn.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    let playerSelection = 'scissor';
    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", computerSelection);
    let results = playRound(playerSelection, computerSelection);
    console.log(results);
   
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


