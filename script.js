let wines = 0;
let losses = 0;
let ties = 0;

const getUserChoice = function() {
    let userChoice = prompt("please choose 'r' for rock, 'p' for paper, or 's' for scissors");
    return userChoice;
}

const getComputerChoice = function() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if(randomNum === 0){
        computerChoice = "r";
    } else if (randomNum === 1){
        computerChoice = "p"
    } else if (randomNum === 2){
        computerChoice = "s";
    }
    return computerChoice;
}

const playGame = function() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`)

    if((userChoice === "r" && computerChoice === "s") || (userChoice === 'p' && computerChoice === 'r') || (userChoice === 's' && computerChoice === 'p')){
        wines++;
        alert("You have won! " +  wines + " time(s)!" );
    } else if(userChoice === computerChoice) {
        ties++;
        alert("You have tied! "  +  ties + " time(s)!" )
    } else {
        losses++;
        alert("You have lost! " +  losses + " time(s)!" );
    } 

    alert(`current Standings: \nWins: ${wines}\nLosses: ${losses}\nTies: ${ties}`)
    let playAgain = confirm("Do you want to play again?");
    let totalPlays = wines + losses + ties;

    if (playAgain === true && totalPlays < 10){
        playGame();
    } else {
        alert(`The game ends: \nCurrent Standings: \nWins: ${wines}\nLosses: ${losses}\nTies: ${ties}. \nSee you next time!`)
    }
}

playGame();
