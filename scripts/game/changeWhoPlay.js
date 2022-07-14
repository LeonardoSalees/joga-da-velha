import { playerOne, playerTwo } from '../menu/Users.js'

import { playerLabel } from './sortPlayer.js'

export function changeWhoPlay() {
  if (playerOne.isPlaying) {
    playerOne.isPlaying = false
    playerTwo.isPlaying = true
    playerLabel.innerText = playerTwo.form

    playerLabel.style.backgroundColor = playerTwo.backColor
  } else if (playerTwo.isPlaying) {
    playerOne.isPlaying = true
    playerTwo.isPlaying = false
    playerLabel.innerText = playerOne.form
    playerLabel.style.backgroundColor = playerOne.backColor
  }
}
