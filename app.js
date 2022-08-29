// HANGMAN EXERCISE

let words = ['fragrant', 'monkey', 'cherish', 'ocelot', 'pancake'];

// let remainingGuesses = 10;

// while (remainingLetters > 0 && remainingGuesses > 0) {

//   let input = guess.toLowerCase()
//   if (input === null) {
//     break;
//   } else if(input.length !== 1) {
//     alert('Please enter a single letter.');
//   } else {
//     remainingGuesses--

//     }
//   }
// }


// Refactoring using functions
const pickWord = () => {
  // return a random word
  return words[Math.floor(Math.random() * words.length)];
}

const setupAnswerArray = (word) => {
  // Return the answer array
  let arr = []
  for (let i=0; i<word.length; i++) {
    arr[i] = "_";
  }
}

const showPlayerProgress = () => {
  // use alert to show the player their progress
  alert(answerArr.join(' ') + `\nYou have ${remainingGuesses} guesses left.`);
}

const getGuess = () => {
  // use prompt for a guess
  prompt('Guess a letter or click Cancel to quit the game');
}

const updateGameState = (guess, word, answerArr) => {
  // update answer array and return a number showing many times the guess appears in the word so remainingLetters can be updated
  for (let j = 0; j < word.length; j++) {
    if (gameWord[j] === guess) {
      answerArr[j] = guess;
      remainingLetters--;
    }
}

const showAnswerAndCongratulatePlayer = () => {
  //  use alert to show the answer and congratulate the player
  if (remainingGuesses === 0) {
    alert('You are out of guesses. Try again.')
  } else {  
    alert(answerArr.join(' '))
    alert('Good job! The answer was ' + gameWord)
  }
}

let word = pickWord();
let answerArr = setupAnswerArray(word); 
let remainingLetters = word.length;

while (remainingLetters > 0) { 
  showPlayerProgress(answerArr);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    let correctGuesses = updateGameState(guess, word, answerArr);
    remainingLetters -= correctGuesses; }
} 

showAnswerAndCongratulatePlayer(answerArr);