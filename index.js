const computerCountM = document.getElementById("computerCount");
const playerCountM = document.getElementById("playerCount");
const displayMessage = document.getElementById("displayMessage");
const choices = document.querySelectorAll(".choice");
const reset = document.getElementById("reset");
const imageDisplay = document.getElementById("imageDisplay");

const option = ["rock", "paper", "scissors"];

const totalCount = 5;
let currentRound = 0;
let playerCount = 0;
let computerCount = 0;

const rockPaperScissors = (playerChoice, computerChoice) => {
  if (currentRound >= totalCount) {
    displayMessage.textContent = `Game Over! ${
      playerCount > computerCount
        ? "You Win! 🥳"
        : playerCount < computerCount
        ? "Computer Wins! 🥳"
        : "It's a Draw! 😔"
    }`;
    return;
  }

  if (playerChoice === computerChoice) {
    displayMessage.textContent = `IT'S A DRAW ! 😔 `;
    currentRound++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    displayMessage.textContent = `YOU WON ! 🥳 `;
    playerCount++;
    currentRound++;
    playerCountM.textContent = playerCount;
    console.log(playerCount);
  } else {
    displayMessage.textContent = `COMPUTER WON ! 🥳 `;
    computerCount++;
    currentRound++;
    computerCountM.textContent = computerCount;
  }
};

const resetGame = () => {
  playerCount = 0;
  computerCount = 0;
  currentRound = 0;
  computerCountM.textContent = computerCount;
  playerCountM.textContent = playerCount;
  imageDisplay.innerHTML = "";
  displayMessage.textContent = `Choose an option to start !`;
};
const handleComputerChoice = () => {
  return option[Math.floor(Math.random() * option.length)];
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    imageDisplay.innerHTML = "";

    const playerChoice = e.target.id;

    let playerPick = document.createElement("img");
    playerPick.src = `./assets/la--hand-${playerChoice}.png`;
    playerPick.alt = `You choose ${playerChoice}`;
    playerPick.style = " rotate: 90deg;";
    imageDisplay.appendChild(playerPick);

    let vs = document.createElement("span");
    vs.textContent = "vs";
    imageDisplay.appendChild(vs);

    const computerChoice = handleComputerChoice();
    let computerPick = document.createElement("img");
    computerPick.src = `./assets/la--hand-${computerChoice}.png`;
    computerPick.alt = `You choose ${computerChoice}`;
    computerPick.style = " rotate: -90deg;";
    imageDisplay.appendChild(computerPick);
   
    rockPaperScissors(playerChoice, computerChoice);
   
  });
});
reset.addEventListener("click", resetGame);



/* 
Rock, Paper Scissors

choice            playerChoice             result 
  r                  r                  draw 
  r                  p                  lose   
  r                  s                   win
  p                  r                    win                      
  p                  p                   draw   
  p                  s                    lose  
  s                  r                    lose
  s                  p                    win  
  s                  s                     draw  

*/
/* 
let player1 = ["rock", "paper", "scissors"];
let player1choice = player1[Math.floor(Math.random() * player1.length)];
let result = "";


const rockPaperScissors = (playerChoice) => {

  
  switch (playerChoice) {
    case "rock":
      if (player1choice === "rock") {
        result = "It's a draw";
      }
      if (player1choice === "paper") {
        result = "You lose";
      }
      if (player1choice === "scissors") {
        result = "You win";
      }
      break;
    case "paper":
      if (player1choice === "rock") {
        result = "You win";
      }
      if (player1choice === "paper") {
        result = "It's a draw";
      }
      if (player1choice === "scissors") {
        result = "You lose";
      }
      break;
    case "scissors":
      if (player1choice === "rock") {
        result = "You lose";
      }
      if (player1choice === "paper") {
        result = "You win";
      }
      if (player1choice === "scissors") {
        result = "It's a draw";
      }
      break;

    default:
      alert("Please enter rock, paper, or scissors");
     
      break;
  }
};
  let input = prompt("Enter Rock, Paper, or Scissors");

playerChoice = input.toLowerCase().trim();
rockPaperScissors(playerChoice);
const display = alert(`Player 1 chose ${player1choice}, you chose ${playerChoice} ::  ${result}`);
*/
