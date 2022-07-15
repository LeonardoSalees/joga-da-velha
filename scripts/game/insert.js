import { playerOne, playerTwo } from '../menu/menuIndex.js'
import { hasWinner } from '../resultsGame/resultGameIndex.js'
import { changeWhoPlay } from './gameIndex.js'

export let campo = document.getElementsByTagName('input')

export function insert() {
  for (let i = 0; i < campo.length; i++) {
    campo[i].addEventListener('click', () => {
      if (playerOne.isPlaying) {
        campo[i].value = playerOne.form
        campo[i].style.backgroundColor = playerOne.backColor
        campo[i].disabled = true
        hasWinner()
        changeWhoPlay()
      } else if (playerTwo.isPlaying) {
        campo[i].value = playerTwo.form
        campo[i].style.backgroundColor = playerTwo.backColor
        campo[i].disabled = true
        hasWinner()
        changeWhoPlay()
      }
    })
  }
}
