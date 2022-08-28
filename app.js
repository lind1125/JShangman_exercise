const catQuestion = () => {
  let likesCats = confirm('Do you like cats?')
  if (likesCats) {
    alert('You\'re a cool cat.')
  } else {
    alert('Yeah, that\'s fine. You\'re still cool.')
  }
}


const greeting = () => {
let yourName = prompt('What\'s your name?')

alert('Hello, ' + yourName)
catQuestion()
}

greeting()

