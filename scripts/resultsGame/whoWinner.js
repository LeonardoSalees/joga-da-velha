import { campo } from '../game/insert.js'
import { playerOne, playerTwo } from '../menu/Users.js'
import { whenFinish } from './whenFinish.js'

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
