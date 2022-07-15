import { resetGame } from '../game/gameIndex.js'

export let buttonPlayAgain = document.getElementById('btn-playAgain')

buttonPlayAgain.addEventListener('click', () => {
  resetGame()
})
