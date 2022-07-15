import { sortPlayer } from './game/gameIndex.js'
import { setScore } from './score/scoreIndex.js'

export function play() {
  setScore()
  sortPlayer()
}

play()
