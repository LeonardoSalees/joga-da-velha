import { resetGame } from '../game/resetGame.js'
import { buttonPlayAgain } from './playAgain.js'
import { winner } from './whoWinner.js'

let containerGanhador = document.getElementById('ganhador')
let spanWinner = document.getElementById('winner')

export function whenFinish() {
  containerGanhador.classList.remove('display-none')
  containerGanhador.classList.add('ganhador')
  spanWinner.innerText = `O Ganhador foi : ${winner.name}`
  buttonPlayAgain.addEventListener('click', () => {
    resetGame()
    containerGanhador.classList.add('display-none')
    containerGanhador.classList.remove('ganhador')
  })
}
