import { changeWhoPlay } from './game/changeWhoPlay.js'
import { sortPlayer } from './game/sortPlayer.js'

import { hasWinner } from './resultsGame/hasWinner.js'

export function play() {
  sortPlayer()
  changeWhoPlay()
  hasWinner()
}

play()
