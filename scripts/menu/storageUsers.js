import { playerOne, playerTwo } from '../menu/Users.js'

const inputNamePlayerOne = document.getElementById('namePlayerOne')
const inputNamePlayerTwo = document.getElementById('namePlayerTwo')

inputNamePlayerOne.addEventListener('input', e => {
  let nameInputOne = e.target.value
  playerOne.name = nameInputOne

  localStorage.setItem('playerOne', JSON.stringify(nameInputOne))
})

inputNamePlayerTwo.addEventListener('input', e => {
  let nameInputTwo = e.target.value
  playerTwo.name = nameInputTwo

  localStorage.setItem('playerTwo', JSON.stringify(nameInputTwo))
})
