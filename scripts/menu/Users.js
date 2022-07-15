export let playerOne = {
  name: '',
  isPlaying: false,
  form: 'X',
  backColor: 'blue'
}

export let playerTwo = {
  name: '',
  isPlaying: false,
  form: 'O',
  backColor: 'red'
}

let playerOneString = localStorage.getItem('playerOne')

playerOne.name = playerOneString

let playerTwoString = localStorage.getItem('playerTwo')
let playerTwoToObject = playerTwoString
playerTwo.name = playerTwoToObject
