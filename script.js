let HumanScore = 0;
let ComputerScore = 0;
function getComputerChoice() {
    let a = Math.random();
    if (a < 0.33) {
        console.log("The computer chose Rock");
        return "rock";
    }
    else if (a > 0.33 && a < 0.66) {
        console.log("The computer chose Paper");
        return "paper";
    }
    else{
        console.log("The computer chose Scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let a = prompt("Enter Rock, Paper, or Scissors");
    if (a.toLowerCase() == "rock"){
        return "rock";
    }
    else if (a.toLowerCase() == "paper") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(human, computer) {
    if (human == computer) {
        console.log("Its a tie!!");
    }
    else if (computer == "rock") {
        if (human == "paper") {
            console.log("You win! Paper beats Rock");
            HumanScore ++;
        }
        else {
            console.log("You lose! Rock beats Scissors");
            ComputerScore++;
        }
    }
    else if (computer == "paper") {
        if (human == "scissors") {
            console.log("You win! Scissors beats paper");
            HumanScore++;
        }
        else {
            console.log("You lose! Paper beats rock");
            ComputerScore++;
        }
    }
    else {
        if (human == "rock") {
            console.log("You Win! Rock beats scissors");
            HumanScore++;
        }
        else {
            console.log("You lose! Paper beats rock");
            ComputerScore++;
        }
    }
    console.log(`The Score is ${HumanScore}:${ComputerScore}`);
}

function playGame() {
    let i = 0;
    for(i=0;i<5;i++)
    {
        Human = getHumanChoice();
        computer = getComputerChoice();
        playRound(Human, computer);
    }
    if (HumanScore > ComputerScore) {
        console.log("You win!!");
    } 
    else if (HumanScore == ComputerScore) {
        console.log("Its a tie");
    }
    else {
        console.log("You lose");
    }
}

playGame();