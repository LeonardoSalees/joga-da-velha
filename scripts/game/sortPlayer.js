import { playerOne, playerTwo } from '../menu/Users.js'

export let playerLabel = document.getElementById('jogador')

export function sortPlayer() {
  if (Math.floor(Math.random() * 2) == 0) {
    playerOne.isPlaying = true
    playerTwo.isPlaying = false

    playerLabel.innerText = playerOne.name

    playerLabel.style.backgroundColor = playerOne.backColor
  } else {
    playerTwo.isPlaying = true
    playerOne.isPlaying = false

    playerLabel.innerText = playerTwo.name

    playerLabel.style.backgroundColor = playerTwo.backColor
  }
}
