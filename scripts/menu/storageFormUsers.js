

const inputFormPlayerOne = document.getElementById('formPlayerOne')
const inputFormPlayerTwo = document.getElementById('formPlayerTwo')

inputFormPlayerOne.addEventListener('input', e => {
  let FormInputOne = e.target.value

    localStorage.setItem('playerOneForm', FormInputOne)
})

inputFormPlayerTwo.addEventListener('input', e => {
  let formInputTwo = e.target.value

  localStorage.setItem('playerTwoForm', formInputTwo)
})
