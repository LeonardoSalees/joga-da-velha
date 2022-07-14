import { campo } from '../game/insert.js'
import { whoWinner } from './whoWinner.js'

export function hasWinner() {
  if (
    campo[0].value == campo[1].value &&
    campo[1].value == campo[2].value &&
    campo[0].value != ''
  ) {
    campo[0].style.backgroundColor = 'black'
    campo[1].style.backgroundColor = 'black'
    campo[2].style.backgroundColor = 'black'
    whoWinner(0)
  } else if (
    campo[3].value == campo[4].value &&
    campo[4].value == campo[5].value &&
    campo[3].value != ''
  ) {
    campo[3].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[5].style.backgroundColor = 'black'
    whoWinner(3)
  } else if (
    campo[6].value == campo[7].value &&
    campo[7].value == campo[8].value &&
    campo[6].value != ''
  ) {
    campo[6].style.backgroundColor = 'black'
    campo[7].style.backgroundColor = 'black'
    campo[8].style.backgroundColor = 'black'
    whoWinner(6)
  } else if (
    campo[0].value == campo[3].value &&
    campo[3].value == campo[6].value &&
    campo[0].value != ''
  ) {
    campo[0].style.backgroundColor = 'black'
    campo[3].style.backgroundColor = 'black'
    campo[6].style.backgroundColor = 'black'
    whoWinner(0)
  } else if (
    campo[1].value == campo[4].value &&
    campo[4].value == campo[7].value &&
    campo[1].value != ''
  ) {
    campo[1].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[7].style.backgroundColor = 'black'
    whoWinner(1)
  } else if (
    campo[2].value == campo[5].value &&
    campo[5].value == campo[8].value &&
    campo[2].value != ''
  ) {
    campo[2].style.backgroundColor = 'black'
    campo[5].style.backgroundColor = 'black'
    campo[8].style.backgroundColor = 'black'
    whoWinner(2)
  } else if (
    campo[0].value == campo[4].value &&
    campo[4].value == campo[8].value &&
    campo[0].value != ''
  ) {
    campo[0].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[8].style.backgroundColor = 'black'
    whoWinner(0)
  } else if (
    campo[2].value == campo[4].value &&
    campo[4].value == campo[6].value &&
    campo[2].value != ''
  ) {
    campo[2].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[6].style.backgroundColor = 'black'
    whoWinner(2)
  }
}
