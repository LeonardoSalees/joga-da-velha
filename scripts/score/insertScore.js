import { playerOne, playerTwo } from '../menu/menuIndex.js'
import { namedSpan, scoredSpan } from './scoreIndex.js'
let spanNamePlayerOne = document.getElementById('namePlayerOne')

let spanScorePlayerOne = document.getElementById('scorePlayerOne')

let spanNamePlayerTwo = document.getElementById('namePlayerTwo')

let spanScorePlayerTwo = document.getElementById('scorePlayerTwo')

export function setScore() {
  namedSpan(spanNamePlayerOne, playerOne)
  namedSpan(spanNamePlayerTwo, playerTwo)

  scoredSpan(spanScorePlayerOne, playerOne)
  scoredSpan(spanScorePlayerTwo, playerTwo)
}
