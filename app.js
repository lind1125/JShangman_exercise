// HANGMAN EXERCISE

let words = ['fragrant', 'monkey', 'cherish', 'ocelot', 'pancake'];

let gameWord = words[Math.floor(Math.random() * words.length)];

setTimeout(console.log(gameWord), 2000)

let answerArr = [];

for (let i=0; i<gameWord.length; i++) {
  answerArr[i] = "_";
}

let remainingLetters = gameWord.length;
let remainingGuesses = 10;




while (remainingLetters > 0 && remainingGuesses > 0) {
  alert(answerArr.join(' ') + `\nYou have ${remainingGuesses} guesses left.`);
  let guess = prompt('Guess a letter or click Cancel to quit the game');
  let input = guess.toLowerCase()
  if (input === null) {
    break;
  } else if(input.length !== 1) {
    alert('Please enter a single letter.');
  } else {
    remainingGuesses--
    for (let j = 0; j < gameWord.length; j++) {
      if (gameWord[j] === input) {
        answerArr[j] = input;
        remainingLetters--;
      }
    }
  }
}

if (remainingGuesses === 0) {
  alert('You are out of guesses. Try again.')
} else {  
  alert(answerArr.join(' '))
  alert('Good job! The answer was ' + gameWord)
}