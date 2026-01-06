const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(
      "Please select one of the provided options: rock, paper, or scissors."
    );
    return false;
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie game.";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "bomb") {
    return "User wins!";
  }
}

function playGame() {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  if (!userChoice) {
    return null;
  } else {
    console.log(
      `User chose: ${userChoice}. Computer chose: ${computerChoice}.`
    );
    console.log(determineWinner(userChoice, computerChoice));
  }
}

playGame();
