
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
let playerOneToObject = JSON.parse(playerOneString)
playerOne.name = playerOneToObject

let playerTwoString = localStorage.getItem('playerTwo')
let playerTwoToObject = JSON.parse(playerTwoString)
playerTwo.name = playerTwoToObject

console.log(playerOne)
console.log(playerTwo)
