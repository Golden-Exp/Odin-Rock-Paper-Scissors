const container = document.querySelector("#container")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let pc = 0;
let human = 0;
const compchoice = document.createElement("div");
const humanchoice = document.createElement("div");
const result = document.createElement("div");
const score = document.createElement("div")
compchoice.classList.add("display");
humanchoice.classList.add("display")
result.classList.add("display")
score.classList.add("display")
function getComputerChoice() {
    let a = Math.random();
    if (a < 0.33) {
        compchoice.textContent = "The computer chose rock!"
        return "rock"
    }
    else if(a > 0.33 && a < 0.66) {
        compchoice.textContent = "The computer chose paper!"
        return "paper"
    }
    else {
        compchoice.textContent = "The computer chose scissors!"
        return "scissors"
    }
}
rock.addEventListener("click", () => {
    let comp = getComputerChoice()
    humanchoice.textContent = "You chose rock!"
    container.appendChild(humanchoice)
    container.appendChild(compchoice)
    if (comp == "rock") {
        result.textContent = `Its a tie`
    }
    else if (comp == "scissors") {
        human++;
        result.textContent = `You get a point!`
    }
    else {
        pc ++;
        result.textContent = `The computer gets a point`
    }
    container.appendChild(result)
    score.textContent = `PC:${pc}  Human:${human}`
    container.appendChild(score)
    if (pc == 5) {
        result.textContent = "The PC has won the game (press any button to reset)"
        human = 0
        pc = 0
    }
    if (human == 5) {
        result.textContent = "You have won the game (press any button to reset)"
        human = 0
        pc = 0
    }
});
paper.addEventListener("click", () => {
    let comp = getComputerChoice()
    humanchoice.textContent = "You chose paper!"
    container.appendChild(humanchoice)
    container.appendChild(compchoice)
    if (comp == "rock") {
        human ++;
        result.textContent = `You get a point!`
    }
    else if (comp == "scissors") {
        pc ++;
        result.textContent = `The computer gets a point!`
    }
    else {
        result.textContent = `Its a tie`
    }
    container.appendChild(result)
    score.textContent = `PC:${pc}  Human:${human}`
    container.appendChild(score)
    if (pc == 5) {
        result.textContent = "The PC has won the game (press any button to reset)"
        human = 0
        pc = 0
    }
    if (human == 5) {
        result.textContent = "You have won the game (press any button to reset)"
        human = 0
        pc = 0
    }
});
scissors.addEventListener("click", () => {
    let comp = getComputerChoice()
    humanchoice.textContent = "You chose scissors!"
    container.appendChild(humanchoice)
    container.appendChild(compchoice)
    if (comp == "rock") {
        pc ++;
        result.textContent = `The Computer gets a point!`
    }
    else if (comp == "scissors") {
        result.textContent = `Its a tie`
    }
    else {
        human ++;
        result.textContent = "You get a point!"
    }
    container.appendChild(result)
    score.textContent = `PC:${pc}  Human:${human}`
    container.appendChild(score)
    if (pc == 5) {
        result.textContent = "The PC has won the game (press any button to reset)"
        human = 0
        pc = 0
    }
    if (human == 5) {
        result.textContent = "You have won the game (press any button to reset)"
        human = 0
        pc = 0
    }
});