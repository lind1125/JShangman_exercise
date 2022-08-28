// HANGMAN EXERCISE

let words = ['fragrant', 'monkey', 'cherish', 'ocelot', 'pancake'];

let gameWord = words[Math.floor(Math.random() * words.length)];

let answerArr = [];

for (let i=0; i<gameWord.length; i++) {
  answerArr[i] = "_";
}

let remainingLetters = gameWord.length;

while (remainingLetters > 0) {
  alert(answerArr.join(' '));
  let guess = prompt('Guess a letter or click Cancel to quit the game');
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Please enter a single letter.');
  } else {
    // Updat the game state with the guess
  }

}