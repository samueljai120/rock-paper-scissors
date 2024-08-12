// Rock Paper Scissors coded by Samuel So, July 27

console.log("Welcome To Human Vs Computer - Rock Paper Scissors -")

// Values declared to keep track
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

//ScoreBord Display
const scoreBord =  document.querySelector("#scoreBoard");

const roundDisplay = document.createElement("p");
const humChoicesDisplay = document.createElement("p");
const comChoicesDisplay = document.createElement("p");
const scoreDisplay = document.createElement("p");
const winnerDisplay = document.createElement("p");
const gameOverDisplay = document.createElement("p");
//append above
scoreBord.append(roundDisplay, humChoicesDisplay, comChoicesDisplay, scoreDisplay, winnerDisplay, gameOverDisplay);



// The function is to generate computer's choice
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3); // This is to generate random index 
    const comChoice = choice[i]; // This is to choose the value of the array according to the generated random index
    comChoicesDisplay.innerText = "Computer's choice: " + comChoice;
    return comChoice;
    }  

function compareResult(humanChoice, computerChoice) {
    // If statement comparing human and computer choices
    if(((humanChoice === "rock") && (computerChoice === "scissors")) 
        || ((humanChoice === "paper") && (computerChoice === "rock")) 
        || ((humanChoice === "scissors") && (computerChoice === "paper"))) {
            humanScore += 1;
            winnerDisplay.innerText = "You Win!";
            
        } else if(((humanChoice === "rock") && (computerChoice === "paper")) 
        || ((humanChoice === "paper") && (computerChoice === "scissors")) 
        || ((humanChoice === "scissors") && (computerChoice === "rock"))) {
            computerScore += 1;
            winnerDisplay.innerText = "You lose!";
        } else if (humanChoice === computerChoice) {
            winnerDisplay.innerText = "Tie!";
        } else {
            winnerDisplay.innerText = "Wrong Choice!";
        }

        scoreDisplay.innerText = "Human:" + humanScore + " Computer: " + computerScore;       

        //gameover trigger
        if (humanScore >= 5 || computerScore >= 5) {
            gameover();
        }
    }
    // If statement to end the game
    function gameover() {
    if (humanScore = 5) {
                gameOverDisplay.innerText = "Congadulations! You are the WINNER!";
            } else {
                gameOverDisplay.innerText = "Good Game! Better luck next time!";
            }
    }

        
        

// This function to retrieve input and print prompt
const buttonChoices = document.querySelector("#choices");
buttonChoices.addEventListener("click", () => {
    const humanChoice = event.target.innerText.toLowerCase();
    humChoicesDisplay.innerText = "Your Choice: " + event.target.innerText;
    const computerChoice = getComputerChoice();
    compareResult(humanChoice, computerChoice)
    roundDisplay.innerText = "Round: " + gameRound++

})
