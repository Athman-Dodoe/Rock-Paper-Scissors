function getComputerChoice() {
    let choices = ["rock","paper","scissor"]
    let choice = choices[Math.floor(Math.random() * choices.length)]
    console.log(choice)
 }

 getComputerChoice()