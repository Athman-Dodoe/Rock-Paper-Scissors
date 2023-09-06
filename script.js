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

let playerSelection;

do {
    playerSelection = prompt("Choose rock or paper or scissor").toLowerCase();
} while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor');


const computerSelection = getComputerChoice();
console.log("Player Selection:", playerSelection);
console.log("Computer Selection:", computerSelection);
console.log(playRound(playerSelection, computerSelection));
