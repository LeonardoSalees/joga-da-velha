import { campo } from '../game/gameIndex.js'
import { playerOne, playerTwo } from '../menu/menuIndex.js'
import { whenFinish } from './resultGameIndex.js'

export let winner

export function whoWinner(i) {
  if (campo[i].value == playerOne.form) {
    winner = playerOne
    whenFinish()
  } else if (campo[i].value == playerTwo.form) {
    winner = playerTwo
    whenFinish()
  }
}
