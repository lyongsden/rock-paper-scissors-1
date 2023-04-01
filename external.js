function getComputerChoice(){
 const computerMove=["Rock", "Paper", "Scissors"];
 const random = Math.floor(Math.random() * 3);
    return computerMove[random]
}
 //ask the player to play by typing "rock", "paper", or "scissors" in a prompt//
 //use the given value in the playRound function//

function getPlayerSelection(){
    let answer = prompt("Rock, Paper, or Scissors?");
    return answer
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();

console.log("The player picks "+ playerSelection);
console.log("The computer picks "+ computerSelection);

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock")
        return ("It's a Tie!")
    else if (playerSelection === "rock" && computerSelection === "paper")
        return ("You Lose! Paper beats Rock!")
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return ("You Win! Rock beats Scissors!")
    else if (playerSelection === "paper" && computerSelection === "rock")
        return ("You Win! Paper beats Rock!")
    else if (playerSelection === "paper" && computerSelection === "paper")
        return ("It's a Tie!")
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return ("You Lose! Scissors beats Paper!")
    else if (playerSelection === "scissors" && computerSelection === "rock")
        return ("You Lose! Rock beats Scissors!")
    else if (playerSelection === "scissors" && computerSelection === "paper")
        return ("You Win! Scissors beats Paper!")
    else (playerSelection === "scissors" && computerSelection === "scissors")
        return ("It's a Tie!")
}
console.log(playRound(playerSelection, computerSelection));