import { resetGame } from '../game/gameIndex.js'
import { play } from '../main.js'
import { winner } from './resultGameIndex.js'

let buttonPlayAgain = document.getElementById('btn-playAgain')
let containerGanhador = document.getElementById('ganhador')
let spanWinner = document.getElementById('winner')

export function whenFinish() {
  containerGanhador.classList.remove('display-none')
  containerGanhador.classList.add('ganhador')
  spanWinner.innerText = `O Ganhador foi : ${winner.name}`
  buttonPlayAgain.addEventListener('click', () => {
    containerGanhador.classList.add('display-none')
    containerGanhador.classList.remove('ganhador')
    resetGame()
    play()
  })
}
