function getComputerChoice() {
    let choices = ["rock","paper","scissor"]
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
        return(`you loose ${computerSelection} beats ${playerSelection}`)
    }


 }

const playerSelection = prompt("Enter your choice")
const computerSelection = getComputerChoice();
console.log("Player Selection:", playerSelection);
console.log("Computer Selection:", computerSelection);
console.log(playRound(playerSelection, computerSelection));
