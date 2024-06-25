const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const result = document.querySelector(".result")
const humanScore = document.querySelector("#humanScore")
const machineScore = document.querySelector("#machineScore")

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        result.innerHTML = "Você ganhou!"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Você perdeu para a Alexa!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}

