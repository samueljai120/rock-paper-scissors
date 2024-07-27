console.log("HI")


// function getComputerChoice
//     const choice = [ rock paper scissors]
//     const i = Math floor(Math random () * 3)
//     const comChoice = choice[i]

// console log getComputerChoice

// function getHumanChoice
//     const humChoice = prompt Rock Paper or Scissors?
//     return humChoice

// const humanScore <- 0
// const computerScore <- 0

// function playRound(humanChoice,computerChoice)
//     if ( humanChoice === computerChoice)
//         return "Tie!"
//     else if  humanChoice <- rock && computer <- paper
    // return You lose
    // else if  humanChoice <- rock && computer <- scissors
    // return you win
    // else if  humanChoice <- paper && computer <- rock
    // return you win
    // else if  humanChoice <- paper && computer <- scissors
    // return you lose
    // else if  humanChoice <- scissors && computer <- rock
    // return you lose
    // else if  humanChoice <- scissors && computer <- paper
    // return you win
    // else
    // return wrong choice

// const result = playRound();
// if (result === you lose)
//     return computerScore++
// else if ( result === you win)
//     return humanScore++
// else 
// return""


function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    const comChoice = choice[i];
    return comChoice;
}

// console.log(getComputerChoice());

function getHumanChoice(){
    const choice = prompt("Rock, Paper or Scissors?");
    const humChoice = choice.toLowerCase();
    return humChoice;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(humanChoice, computerChoice);
    if(((humanChoice === "rock") && (computerChoice === "scissors")) || ((humanChoice === "paper") && (computerChoice === "rock")) || ((humanChoice === "scissors") && (computerChoice === "paper"))) {
        return "You Win!";
    } else if(((humanChoice === "rock") && (computerChoice === "paper")) || ((humanChoice === "paper") && (computerChoice === "scissors")) || ((humanChoice === "scissors") && (computerChoice === "rock"))) {
        return "You lose!";
    } else if (humanChoice === computerChoice){
        return "Tie!";
    } else {
        return "Wrong Choice!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

function scoreBoard() {
    if (result === "You win!") {
        const humScore = "Human Score: " + humanScore++
        return humScore
    } else if (result === "You lose!") {
        const comScore = "Human Score: " + computerScore++
        return comScore
    } else {
        return "No Winner!"
    }
}

const score = scoreBoard();

function trigger(){
    if (score < 5){
        console.log(score);
    } else {
            console.log("Game Over!")
        }
}

const times = trigger();
console.log(times);
// function trigger(){
//     if score
// }

// console.log(result, score);

// const result = playRound();
// if (result === you lose)
//     return computerScore++
// else if ( result === you win)
//     return humanScore++
// else 
// return""
