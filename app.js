// HANGMAN EXERCISE


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
        
        
// Refactoring using functions (Still requires accounting for capital letter guess and guess limits)
let words = ['fragrant', 'monkey', 'cherish', 'ocelot', 'pancake'];

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
  return arr
}

const showPlayerProgress = (answerArr) => {
  // use alert to show the player their progress
  alert(answerArr.join(' '));
}

const getGuess = () => {
  // use prompt for a guess
  return prompt('Guess a letter or click Cancel to quit the game');
}

const updateGameState = (guess, word, answerArr) => {
  // update answer array and return a number showing many times the guess appears in the word so remainingLetters can be updated
  let letterCount = 0
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArr[j] = guess;
      letterCount++
    }
  }
  return letterCount
}

const showAnswerAndCongratulatePlayer = (answerArr) => {
    alert(answerArr.join(' '))
    alert('Good job! The answer was ' + word)
}

let word = pickWord();
console.log(word)
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