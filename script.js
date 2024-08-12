// Rock Paper Scissors coded by Samuel So, July 27

console.log("Welcome To Human Vs Computer - Rock Paper Scissors -")

// Values declared to keep track
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;
    
// This event is to trigger the function by the button on the html page
document.getElementById("button").addEventListener("click", () => {
    playGame(); // The game will have
})
//Scoreboard
const scoreBoard = document.querySelector("#scoreBoard");
//resultboard
const resultBoard = document.querySelector("#result");
// The function is to generate computer's choice
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3); // This is to generate random index 
    const comChoice = choice[i]; // This is to choose the value of the array according to the generated random index
    const comChoiceDisplay = document.createElement("p");
    comChoiceDisplay.inneerText = "Computer's choice: " + comChoice;
    scoreBoard.append(comChoiceDisplay);
    return comChoice;
    }

    // This function to retrieve input and print prompt
function getHumanChoice(){
    const choice = prompt("Enter Your Choice [ Rock, Paper or Scissors ]");
    const humChoice = choice.toLowerCase();
    const humChoiceDisplay = document.createElement("p");
    humChoiceDisplay.innerText = "Your choice: " + humChoice;
    scoreBoard.append(humChoiceDisplay);
    return humChoice;
    }


function playGame(){
    // This is to loop the game according to the max value
    while (humanScore <= 5 && computerScore <= 5) {
        //choices button.
        const choiceDiv = document.querySelector("#choices");

        // The below three console will print a nice layout for the Round
        
        const currentRound = document.createElement("p");
        currentRound.innerText = "Round: " + gameRound++ ;
        scoreBoard.append(currentRound);
        
        
    
        // Functions stored in variables
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
    
        // If statement comparing human and computer choices
        if(((humanChoice === "rock") && (computerChoice === "scissors")) 
        || ((humanChoice === "paper") && (computerChoice === "rock")) 
        || ((humanChoice === "scissors") && (computerChoice === "paper"))) {
            humanScore += 1;
            console.log("Human:" + humanScore + " Computer: " + computerScore);       
            console.log("You Win!");
            
        } else if(((humanChoice === "rock") && (computerChoice === "paper")) 
        || ((humanChoice === "paper") && (computerChoice === "scissors")) 
        || ((humanChoice === "scissors") && (computerChoice === "rock"))) {
            computerScore += 1;
            console.log("Human:" + humanScore + " Computer: " + computerScore);
            console.log("You lose!");
        } else if (humanChoice === computerChoice) {
            console.log("Human:" + humanScore + " Computer: " + computerScore); 
            console.log("Tie!");
        } else {
            console.log("Human:" + humanScore + " Computer: " + computerScore);
            console.log("Wrong Choice!");
        }
    

    // If statement to end the game
        if (humanScore >= 5 || computerScore >= 5) {
            resultBoard.innerText = "Game Over!";
            if (humanScore = 5) {
                resultBoard.innerText = "Congadulations! You are the WINNER!";
            } else {
                resultBoard.innerText = "Good Game! Better luck next time!";
            }
            break;
        }
        
    }

}