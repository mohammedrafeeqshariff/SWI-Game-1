const computerChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

const possibleComputerChoices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    computersChoice();
    sayResult();
}))

function computersChoice(){
    computerChoice = possibleComputerChoices[Math.floor(Math.random() * 3)]
    computerChoiceDisplay.innerHTML = computerChoice;
}

function sayResult(){
    if (userChoice === computerChoice) {
        result="It's a tie";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result="You Win!";
    } else {
        result="You Lose!";
    }

    resultDisplay.innerHTML = result;
}
