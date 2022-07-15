import { campo } from '../game/gameIndex.js'
import { playerOne, playerTwo } from '../menu/menuIndex.js'

export let winner = undefined

export function verifyWhoIsWinner(i) {
  if (campo[i].value == playerOne.form) {
    winner = playerOne.name
    console.log(winner + 'one')
    return true
  } else if (campo[i].value == playerTwo.form) {
    winner = playerTwo.name
    console.log(winner + 'two')
    return true
  }
}
