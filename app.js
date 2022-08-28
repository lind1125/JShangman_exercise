// HANGMAN EXERCISE

let words = ['fragrant', 'monkey', 'cherish', 'ocelot', 'pancake']

let gameWord = words[Math.floor(Math.random() * words.length)]

let answerArr = []

for (let i=0; i<gameWord.length; i++) {
  answerArr[i] = "_"
}

let remainingLetters = word.length

while (remainingLetters > 0) {
  alert(answerArr.join(' '))

}