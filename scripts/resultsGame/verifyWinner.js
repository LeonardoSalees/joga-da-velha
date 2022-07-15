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
    setColorWinner(0)
    setColorWinner(1)
    setColorWinner(2)
    if (verifyWhoIsWinner(0) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[3].value == campo[4].value &&
    campo[4].value == campo[5].value &&
    campo[3].value != ''
  ) {
    setColorWinner(3)
    setColorWinner(4)
    setColorWinner(5)
    if (verifyWhoIsWinner(3) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[6].value == campo[7].value &&
    campo[7].value == campo[8].value &&
    campo[6].value != ''
  ) {
    setColorWinner(6)
    setColorWinner(7)
    setColorWinner(8)
    if (verifyWhoIsWinner(6) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[0].value == campo[3].value &&
    campo[3].value == campo[6].value &&
    campo[0].value != ''
  ) {
    setColorWinner(0)
    setColorWinner(3)
    setColorWinner(6)
    if (verifyWhoIsWinner(0) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[1].value == campo[4].value &&
    campo[4].value == campo[7].value &&
    campo[1].value != ''
  ) {
    setColorWinner(1)
    setColorWinner(4)
    setColorWinner(7)
    if (verifyWhoIsWinner(1) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[2].value == campo[5].value &&
    campo[5].value == campo[8].value &&
    campo[2].value != ''
  ) {
    setColorWinner(2)
    setColorWinner(5)
    setColorWinner(8)
    if (verifyWhoIsWinner(2) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[0].value == campo[4].value &&
    campo[4].value == campo[8].value &&
    campo[0].value != ''
  ) {
    setColorWinner(0)
    setColorWinner(4)
    setColorWinner(8)
    if (verifyWhoIsWinner(0) == true) {
      showMessageToWinner()
    }
  } else if (
    campo[2].value == campo[4].value &&
    campo[4].value == campo[6].value &&
    campo[2].value != ''
  ) {
    setColorWinner(2)
    setColorWinner(4)
    setColorWinner(6)
    if (verifyWhoIsWinner(2) == true) {
      showMessageToWinner()
    }
  } else if (allFieldsAreFull == true) {
    showMessageDraw()
  }
}

function setColorWinner(position) {
  campo[position].style.backgroundColor = 'black'
  campo[position].style.color = 'white'
}
