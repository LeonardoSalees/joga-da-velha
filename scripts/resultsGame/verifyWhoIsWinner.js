import { campo } from '../game/gameIndex.js'
import { playerOne, playerTwo } from '../menu/menuIndex.js'
import { increasePoint } from '../score/defineScorePlayers.js'

export let winner = undefined

export function verifyWhoIsWinner(i) {
  if (campo[i].value == playerOne.form) {
    winner = playerOne.name
    increasePoint(playerOne)
    return true
  } else if (campo[i].value == playerTwo.form) {
    winner = playerTwo.name
    
    increasePoint(playerTwo)
    return true
  }
}
