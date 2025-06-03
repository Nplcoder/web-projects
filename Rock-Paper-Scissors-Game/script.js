const buttonElem = document.querySelectorAll('button');
const resultElem = document.querySelector('#result');
const userScoreElem = document.querySelector('#user-score')
const computerScoreElem = document.querySelector('#computer-score')

let playerScore = 0;
let computerScore = 0;

buttonElem.forEach(button =>{
    button.addEventListener('click', () => {
       const result = playRound(button.id, computerPlay());
       resultElem.textContent = result;
    });
});


function computerPlay(){
    const choices = ['rock','paper', 'scissors'];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerPlay){
        return "It's a tie!";
    }else if (
        (playerSelection === "rock" && 
        computerSelection === "scissors") ||
        (playerSelection === "paper" &&
            computerSelection === "rock") ||
            (playerSelection === "scissors" &&
                computerSelection === "paper")
    ){
        playerScore++;
        userScoreElem.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }else{
        computerScore++;
        computerScoreElem.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}