import { resetGame } from '../game/gameIndex.js'
import { play } from '../main.js'
import { winner } from './resultGameIndex.js'

let buttonPlayAgain = document.getElementById('btn-playAgain')
let containerGanhador = document.getElementById('ganhador')
let spanWinner = document.getElementById('winner')
let contentGanhador = document.getElementById('css-transition-win')

export function showMessageToWinner() {
  addClassActive()
  spanWinner.innerText = `O(A) Ganhador(a) foi: ${winner}`
}
export function showMessageDraw() {
  addClassActive()

  spanWinner.innerText = 'Deu empate'
}

function removeClassActive() {
  containerGanhador.classList.remove('active')
  contentGanhador.classList.remove('active')
}

function addClassActive() {
  containerGanhador.classList.add('active')
  contentGanhador.classList.add('active')
}

buttonPlayAgain.addEventListener('click', () => {
  removeClassActive()
  resetGame()
  play()
})
