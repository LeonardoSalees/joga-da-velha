export let playerOne = {
  name: '',
  isPlaying: false,
  form: '',
  points: 0
}

export let playerTwo = {
  name: '',
  isPlaying: false,
  form: '',
  points: 0
}

let playerOneName = localStorage.getItem('playerOneName')
playerOne.name = playerOneName

let playerTwoName = localStorage.getItem('playerTwoName')
playerTwo.name = playerTwoName

let playerOneForm = localStorage.getItem('playerOneForm')
playerOne.form = playerOneForm

let playerTwoForm = localStorage.getItem('playerTwoForm')
playerTwo.form = playerTwoForm
