const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector("#guesses");
const remaining = document.querySelector("#lastResult");
const low_or_high = document.querySelector("#low_or_high");
const newGameBtn = document.querySelector("#newGameBtn");

let prevGuesses = [];
let numGuesses = 0;
let playGame = true;

let randomNumber = generateRandomNumber();

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}


function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  prevGuesses.push(guess);
  if (numGuesses === 10) {
    endGame(`Game Over! The random number was ${randomNumber}.`);
  } else {
    checkGuess(guess);
    numGuesses++;
    if (numGuesses === 2) {
      remaining.textContent =  numGuesses - 1;
      
    } else {
      remaining.textContent = 10 - numGuesses;
    }
    if (10 - numGuesses === 1) {
      let hintNumber = generateHintNumber(randomNumber);
      displayMessage(`I've made it easy for you! The random number is between ${hintNumber.min} and ${hintNumber.max}.`);
    }
  }
  displayGuess(prevGuesses);
}

function generateHintNumber(randomNumber) {
  const min = randomNumber - 2;
  const max = randomNumber + 2;
  return { min, max };
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations! You guessed it right!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too low! Try again.");
  } else {
    displayMessage("Too high! Try again.");
  }
}

function displayGuess(guesses) {
  guessSlot.textContent = guesses.join(", ");
}

function displayMessage(message) {
  low_or_high.textContent = message;
}

function endGame(message = "") {
  displayMessage(message);
  displayMessage(`The correct number was: ${randomNumber}`);
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
}

function startNewGame() {
  prevGuesses = [];
  numGuesses = 0;
  randomNumber = generateRandomNumber();
  remaining.textContent = "10";
  low_or_high.textContent = "";
  guessSlot.textContent = "";
  userInput.removeAttribute("disabled");
  submit.removeAttribute("disabled");
}

newGameBtn.addEventListener("click", function () {
    startNewGame();
  });