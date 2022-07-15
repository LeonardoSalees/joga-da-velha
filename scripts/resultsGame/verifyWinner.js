import { campo } from '../game/gameIndex.js'
import {
  verifyWhoIsWinner,
  showMessageToWinner,
  allFieldsAreFull,
  showMessageDraw
} from './resultGameIndex.js'

export function verifyWinner() {
  if (
    campo[0].value == campo[1].value &&
    campo[1].value == campo[2].value &&
    campo[0].value != ''
  ) {
    campo[0].style.backgroundColor = 'black'
    campo[1].style.backgroundColor = 'black'
    campo[2].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(0) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[3].value == campo[4].value &&
    campo[4].value == campo[5].value &&
    campo[3].value != ''
  ) {
    campo[3].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[5].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(3) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[6].value == campo[7].value &&
    campo[7].value == campo[8].value &&
    campo[6].value != ''
  ) {
    campo[6].style.backgroundColor = 'black'
    campo[7].style.backgroundColor = 'black'
    campo[8].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(6) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[0].value == campo[3].value &&
    campo[3].value == campo[6].value &&
    campo[0].value != ''
  ) {
    campo[0].style.backgroundColor = 'black'
    campo[3].style.backgroundColor = 'black'
    campo[6].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(0) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[1].value == campo[4].value &&
    campo[4].value == campo[7].value &&
    campo[1].value != ''
  ) {
    campo[1].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[7].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(1) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[2].value == campo[5].value &&
    campo[5].value == campo[8].value &&
    campo[2].value != ''
  ) {
    campo[2].style.backgroundColor = 'black'
    campo[5].style.backgroundColor = 'black'
    campo[8].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(2) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[0].value == campo[4].value &&
    campo[4].value == campo[8].value &&
    campo[0].value != ''
  ) {
    campo[0].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[8].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(0) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[2].value == campo[4].value &&
    campo[4].value == campo[6].value &&
    campo[2].value != ''
  ) {
    campo[2].style.backgroundColor = 'black'
    campo[4].style.backgroundColor = 'black'
    campo[6].style.backgroundColor = 'black'
    if (verifyWhoIsWinner(2) == true) {
      showMessageToWinner()
    }
  } else if (allFieldsAreFull == true) {
    showMessageDraw()
  }
}
