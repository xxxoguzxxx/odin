function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) return 'tie';

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    
    return 'win';
  }
  
  return 'lose';
}


function playerPick(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  const message = `You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResult: ${result.toUpperCase()}`;
  alert(message);
}