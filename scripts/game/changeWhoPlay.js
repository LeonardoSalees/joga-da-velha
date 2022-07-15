import { playerOne, playerTwo } from '../menu/menuIndex.js'

import { playerLabel } from './gameIndex.js'

export function changeWhoPlay() {
  if (playerOne.isPlaying) {
    playerOne.isPlaying = false
    playerTwo.isPlaying = true
    playerLabel.innerText = playerTwo.name

    playerLabel.style.backgroundColor = playerTwo.backColor
  } else if (playerTwo.isPlaying) {
    playerOne.isPlaying = true
    playerTwo.isPlaying = false
    playerLabel.innerText = playerOne.name
    playerLabel.style.backgroundColor = playerOne.backColor
  }
}
