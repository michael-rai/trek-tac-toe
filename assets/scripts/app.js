'use strict'

// const events = require('./events')
const userToken = 'X'
// const oppToken = 'Y'

$(() => {
  console.log('js is running')
  //  $('#signUpFormModal').on('submit', events.onSignUp)
  //  $('#loginInFormModal').on('submit', events.onSignIn)
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  $('.container').hide()

  // const isGameOver = function () {
  // // check if game is overflow
  // for (var i = 0; i < 3, i++) {
  //   if (grid[i][0]) !== ' ' &&
  // }

  $('.col').click(function () {
    $(this).html(userToken)
    const i = $(this).data('i')
    const j = $(this).data('j')
    grid[i][j] = userToken

    // if (isGameOver()) {
    //
    // } else {
    //   // opp turn
    // }
    $('#testToggle').close(function () {
      $('.container').toggle()
    })
  })
})
