import { playerOne, playerTwo } from '../menu/menuIndex.js'
import { verifyWinner } from '../resultsGame/resultGameIndex.js'
import { changeWhoPlay, verifyAllFields } from './gameIndex.js'

export let campo = document.getElementsByTagName('input')

for (let i = 0; i < campo.length; i++) {
  campo[i].addEventListener('click', () => {
    if (playerOne.isPlaying) {
      campo[i].value = playerOne.form
      campo[i].style.backgroundColor = playerOne.backColor
      campo[i].disabled = true
      changeWhoPlay()
      verifyAllFields(i)
      verifyWinner()
    } else if (playerTwo.isPlaying) {
      campo[i].value = playerTwo.form
      campo[i].style.backgroundColor = playerTwo.backColor
      campo[i].disabled = true
      changeWhoPlay()
      verifyAllFields(i)
      verifyWinner()
    }
  })
}
