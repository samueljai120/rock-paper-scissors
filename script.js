
// a funtion to output random rock paper or scissors
// function getComputerChoice()
//    list <- [rock, paper, scissors]
//    i <- Math.floor(Math.random() * 4)
//    return list[i]




function getComputerChoice() {
    let game = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random() * 3);
    console.log(game[i]);
    return list[i];
}


// logic that gets human choices
// function getHumanChoice
// let input <- prompt(Rock, Paper or Scissors)
// return input


function getHumanChoice() {
    let input = prompt("Rock, Paper, Scissors")
    console.log(input)
}

getHumanChoice();