const inputNamePlayerOne = document.getElementById('namePlayerOne')
const inputNamePlayerTwo = document.getElementById('namePlayerTwo')

let playerOne = {
  name: ''
}

let playerTwo = {
  name: ''
}

let playerOneString = localStorage.getItem('playerOne')
let playerOneToObject = JSON.parse(playerOneString)
playerOne = playerOneToObject

let playerTwoString = localStorage.getItem('playerTwo')
let playerTwoToObject = JSON.parse(playerTwoString)
playerTwo = playerTwoToObject

inputNamePlayerOne.addEventListener('input', e => {
  let nameInputOne = e.target.value
  playerOne.name = nameInputOne

  localStorage.setItem('playerOne', JSON.stringify(playerOne))
})

inputNamePlayerTwo.addEventListener('input', e => {
  let nameInputTwo = e.target.value
  playerTwo.name = nameInputTwo

  localStorage.setItem('playerTwo', JSON.stringify(playerTwo))
})

console.log(playerOne)
console.log(playerTwo)
