// Rock, Paper and Scissors game
const choice = ["Rock", "Paper", "Scissors"];

function playRound() {
  const computerSelection = choice[Math.floor(Math.random() * choice.length)];
  const playerSelection = prompt("Enter Rock or Paper or Scissors");
  
  if (computerSelection === "Rock" && playerSelection === "Scissors") {
    return "Computer wins";
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    return "Player wins";
  } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    return "Computer wins";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Computer wins";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "Player wins";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "Player wins";
  } else {
    return "Draw";
  }
}

console.log(playRound());
