import { campo } from './gameIndex.js'
import { play } from '../main.js'

export function resetGame() {
  for (let i = 0; i < campo.length; i++) {
    campo[i].value = ''
    campo[i].style.backgroundColor = 'white'
    campo[i].disabled = false
  }
  play()
}
