import { resetGame } from '../game/gameIndex.js'
import { play } from '../main.js'
import { winner } from './resultGameIndex.js'

let buttonPlayAgain = document.getElementById('btn-playAgain')
let containerGanhador = document.getElementById('ganhador')
let spanWinner = document.getElementById('winner')

export function showMessageToWinner() {
  containerGanhador.classList.remove('display-none')
  containerGanhador.classList.add('ganhador')
  spanWinner.innerText = `O(A) Ganhador(a) foi : ${winner}`
}
export function showMessageDraw() {
  containerGanhador.classList.remove('display-none')
  containerGanhador.classList.add('ganhador')
  spanWinner.innerText = 'Deu empate'
}

buttonPlayAgain.addEventListener('click', () => {
  containerGanhador.classList.add('display-none')
  containerGanhador.classList.remove('ganhador')
  resetGame()
  play()
})
