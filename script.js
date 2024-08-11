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
    
function playGame(){
    // This is to loop the game according to the max value
    while (humanScore <= 5 && computerScore <= 5) {
        // The below three console will print a nice layout for the Round
        console.log("")
        console.log("Round: " + gameRound++);
        console.log("")
        // The function is to generate computer's choice
        function getComputerChoice(){
        const choice = ["rock", "paper", "scissors"];
        const i = Math.floor(Math.random() * 3); // This is to generate random index 
        const comChoice = choice[i]; // This is to choose the value of the array according to the generated random index
        console.log("Computer's choice: " + comChoice);
        return comChoice;
        }
    
        // This function to retrieve input and print prompt
        function getHumanChoice(){
        const choice = prompt("Enter Your Choice [ Rock, Paper or Scissors ]");
        const humChoice = choice.toLowerCase();
        console.log("Your choice: " + humChoice);
        return humChoice;
        }
    
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
            console.log("Game Over!");
            if (humanScore = 5) {
                console.log("Congadulations! You are the WINNER!");
            } else {
                console.log("Good Game! Better luck next time!");
            }
            break;
        }
        
    }

}