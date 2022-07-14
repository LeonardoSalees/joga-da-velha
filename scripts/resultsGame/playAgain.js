import { resetGame } from '../game/resetGame.js'

export let buttonPlayAgain = document.getElementById('btn-playAgain')

buttonPlayAgain.addEventListener('click', () => {
  resetGame()
})
