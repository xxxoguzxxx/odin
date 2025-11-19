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

alert("Welcome to Rock, Paper, Scissors! Click OK to start.");


function startGame() {
  for (let i = 0; i < 5;) {

  const playerChoice = prompt('Enter rock, paper, or scissors:');
  if (!playerChoice) return;

  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);

  const message = `You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResult: ${result.toUpperCase()}`;
  alert(message);
}}



