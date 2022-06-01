// 
//cashing the DOM
let userScore = 0;
let draw = 0;
let computerScore = 0;
let gameCounter = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const computerChoiceBoard_h4 = document.querySelector(".comp-choice-board > h4");
const currentStanding_span = document.getElementById("games-played")
const result_h4= document.querySelector(".result > h4");
const rock_div= document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}


function win(userChoice, computerChoice) {
    userScore++;
    gameCounter++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    computerChoiceBoard_h4.innerHTML = convertToWord(computerChoice);
    result_h4.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!"
    currentStanding_span.innerHTML = "Game played: " + gameCounter  + " \nWin(s): " + userScore + " \nLose(s) " + computerScore + " \nTie(s) " + draw;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);

    
}

function lose(userChoice, computerChoice) {
    computerScore++
    gameCounter++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    computerChoiceBoard_h4.innerHTML = convertToWord(computerChoice);
    result_h4.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lost."
    currentStanding_span.innerHTML = "Game played: " + gameCounter  + " \nWin(s): " + userScore + " \nLose(s) " + computerScore + " \nTie(s) " + draw;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);

}


function tie(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        draw++;
    }
    gameCounter++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    computerChoiceBoard_h4.innerHTML = convertToWord(computerChoice);
    result_h4.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) + ". It's a draw!"
    currentStanding_span.innerHTML = "Game played: " + gameCounter + " \nWin(s): " + userScore + " \nLose(s) " + computerScore + " \nTie(s) " + draw ;
    userChoice_div.classList.add("gray-glow");
    setTimeout (() => userChoice_div.classList.remove("gray-glow"), 300);
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            console.log("You won!");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            console.log("You lost!");
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            console.log("You tied.")    
    }

}
function main() {
    rock_div.addEventListener('click', () => game("r"))
    paper_div.addEventListener('click', () => game("p"))
    scissors_div.addEventListener('click', () => game("s"))
}
main();



































































// let wines = 0;
// let losses = 0;
// let ties = 0;

// const getUserChoice = function() {
//     let userChoice = prompt("please choose 'r' for rock, 'p' for paper, or 's' for scissors");
//     return userChoice;
// }

// const getComputerChoice = function() {
//     let randomNum = Math.floor(Math.random() * 3);
//     let computerChoice;
//     if(randomNum === 0){
//         computerChoice = "r";
//     } else if (randomNum === 1){
//         computerChoice = "p"
//     } else if (randomNum === 2){
//         computerChoice = "s";
//     }
//     return computerChoice;
// }

// const playGame = function() {
//     let userChoice = getUserChoice();
//     let computerChoice = getComputerChoice();
//     alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`)

//     if((userChoice === "r" && computerChoice === "s") || (userChoice === 'p' && computerChoice === 'r') || (userChoice === 's' && computerChoice === 'p')){
//         wines++;
//         alert("You have won! " +  wines + " time(s)!" );
//     } else if(userChoice === computerChoice) {
//         ties++;
//         alert("You have tied! "  +  ties + " time(s)!" )
//     } else {
//         losses++;
//         alert("You have lost! " +  losses + " time(s)!" );
//     } 

//     alert(`current Standings: \nWins: ${wines}\nLosses: ${losses}\nTies: ${ties}`)
//     let playAgain = confirm("Do you want to play again?");
//     let totalPlays = wines + losses + ties;

//     if (playAgain === true && totalPlays < 10){
//         playGame();
//     } else {
//         alert(`The game ends: \nCurrent Standings: \nWins: ${wines}\nLosses: ${losses}\nTies: ${ties}. \nSee you next time!`)
//     }
// }

// playGame();
