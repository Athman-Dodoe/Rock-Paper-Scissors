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

let countWins = 0;
let countDraws = 0;
let countLooses = 0;
 
for (let i = 0; i < 5; i++){
    do {
        playerSelection = prompt("Choose rock or paper or scissor").toLowerCase();
    } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor');
    
    const computerSelection = getComputerChoice();
    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", computerSelection);
    let results = playRound(playerSelection, computerSelection);
    console.log(results);

    if (results === 'You win'){
        countWins += 1;
    }else if (results === 'Its a draw!'){
        countDraws += 1;
    
    }else {
        countLooses += 1;
    }  
}

console.log('Game Results');
console.log('----------------------------');

console.log('No of wins:', countWins);
console.log('No of Draws:', countDraws);
console.log('No of Looses:', countLooses);

console.log('----------------------------');

if (countWins > countLooses) {
    console.log('Player Selection Wins')
}else if ( countWins < countLooses) {
    console.log('Computer Selection Wins')
}else {
    console.log('Its a Draw');
}