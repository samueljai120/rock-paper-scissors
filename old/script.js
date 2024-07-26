// step 2
// a funtion to output random rock paper or scissors
// function getComputerChoice()
//    list <- [rock, paper, scissors]
//    i <- Math.floor(Math.random() * 4)
//    return list[i]




// function getComputerChoice() {
//     let game = ["rock", "paper", "scissors"];
//     i = Math.floor(Math.random() * 3);
//     return list[i];
// }

// step 3
// logic that gets human choices
// function getHumanChoice
// let input <- prompt(Rock, Paper or Scissors)
// return input


// function getHumanChoice() {
//     let input = prompt("Rock, Paper, Scissors");
//     return getHumanChoice;
// }

// step 4
// function to keep track player scroes
// let humanScore <- 0
// let computerScore <- 0

// let humanScore = 0;
// let computerScore = 0;


// Setp 5
// play rounds and keep track of scores
// 
// function playRound (humanChoice, computerChoice) {
// 
// }
// const humanSelection = getHumanChoice().tolowerCase
// const computerSelection = getComputerChoice()
// playRound(humanSelection, computerSelection)

// function playRound (humanChoice, computerChoice) {

// }

// const humanSelection = getHumanChoice().toLoweCase();
// const computerChoice = getComputerChoice();

// playRound(humanChoice, computerChoice);


// step 6
// function playGame() {
// function playRound
// let humanScore
// let computerscore
// }
// 
// playRound 5 times
// 
// const rounds = 5
// for (let i = 1; i <= 5; ++i) {
//  playRound();
// }
// 

function getComputerChoice() {
    let game = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random() * 3);
    return game[i];
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, Scissors");
    const lowerCase = input.toLowerCase();
    return lowerCase;
}


function playGame(times) {
// scores not used yet
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie!");

            //value got stuck in this
        } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            console.log("You win!");
        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            console.log("You lose!");
        } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            console.log("You lose!");
        } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
            console.log("You lose!");
        } else if ((humanChoice === " scissors") && (computerChoice === "paper")) {
            console.log("You win!");
        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            console.log("You win!");
        } else {
            console.log("Try again!")
        }
    }

    const rounds = times;
    for (let i = 1; i <= rounds; ++i) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanSelection, computerChoice);
    }

}

    
const humanSelection = getHumanChoice();
const computerChoice = getComputerChoice();



playGame(5);