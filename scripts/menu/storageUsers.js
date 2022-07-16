const inputNamePlayerOne = document.getElementById('namePlayerOne')
const inputNamePlayerTwo = document.getElementById('namePlayerTwo')

inputNamePlayerOne.addEventListener('input', e => {
  let nameInputOne = e.target.value

  localStorage.setItem('playerOneName', nameInputOne)
})

inputNamePlayerTwo.addEventListener('input', e => {
  let nameInputTwo = e.target.value

  localStorage.setItem('playerTwoName', nameInputTwo)
})
