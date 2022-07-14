import { changeWhoPlay } from './game/changeWhoPlay.js'
import { insert } from './game/insert.js'
import { sortPlayer } from './game/sortPlayer.js'

import { hasWinner } from './resultsGame/hasWinner.js'

export function play() {
  sortPlayer()
  insert()
  changeWhoPlay()
  hasWinner()
}

play()
