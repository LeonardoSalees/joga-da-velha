import { playerOne, playerTwo } from '../menu/Users.js'
import { campo } from '../game/insert.js'

export let allFieldsAreFull = false
export let countHowCamposTrue = 0

export function verifyAllFields(campoIndex) {
  if (
    campo[campoIndex].value == playerOne.form ||
    campo[campoIndex].value == playerTwo.form
  ) {
    countHowCamposTrue++
  }
  if (countHowCamposTrue == 9) {
    allFieldsAreFull = true
    countHowCamposTrue = 0
  } else if (countHowCamposTrue < 9) {
    allFieldsAreFull = false
  }
}

export function resetCountAllFields() {
  if (countHowCamposTrue > 0) {
    countHowCamposTrue = 0
  }
}
