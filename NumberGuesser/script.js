let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return (Math.floor(Math.random() * 10));
}

const getAbsoluteDistance = (target, guess) => {
  return (Math.abs(target - guess));
}

const compareGuesses = (humanGuess, compGuess, targetNum ) => {

  (humanGuess > 9) && alert('Wrong Input');

  let humanDiff = getAbsoluteDistance(targetNum, humanGuess);
  let compDiff = getAbsoluteDistance(targetNum, compGuess);

  return humanDiff <= compDiff;
}

// console.log(compareGuesses(4, 7, 1));

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}



