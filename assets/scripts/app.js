'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const events = require('./events')
const userToken = 'X'
// const oppToken = 'Y'

$(() => {
  console.log('loaded')
  //  $('#signUpFormModal').on('submit', events.onSignUp)
  //  $('#loginInFormModal').on('submit', events.onSignIn)
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  $('.col').click(function () {
    $this = $(this);
    $(this).html(userToken);
    const i = $(this).data('i');
    const j = $(this).data('j')
    grid[i][j] = userToken;
    console.log(grid);
})

})
