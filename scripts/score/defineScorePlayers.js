export function namedSpan(spanNamePlayer, player) {
  spanNamePlayer.innerText = player.name
}
export function scoredSpan(spanScoredPlayer, player) {
  spanScoredPlayer.innerText = player.points
}

export function increasePoint(player){
  player.points += 1
}