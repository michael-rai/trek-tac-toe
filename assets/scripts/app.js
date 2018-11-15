'use strict'

const events = require('./events')

const userToken = 'X'
// const oppToken = 'Y'

$(() => {
  console.log('js is running')
  //  $('#signUpFormModal').on('submit', events.onSignUp)
  $('#loginInFormModal').on('submit', events.onSignIn)

  // the following code can be attributed to Cody Seibert via Youtube at https://www.youtube.com/watch?v=ra2_rKV0mDE
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  //    const isGameOver = function () {
  //      // check horizontal
  //      for (var i = 0; i < 3; i++){
  //        if (grid[i][0] !== ' ' &&
  //        grid[i][0] === grid [i][2] &&
  //        grid[i][0] === grid [i][2]) {
  //         return grid [i][0]
  //
  //       //check vertical
  //       for (var i = 0; i < 3; i++){
  //         if (grid[0][j] !== ' ' &&
  //         grid[0][j] === grid [1][j] &&
  //         grid[0][j] === grid [2][j]) {
  //          return grid [0][j]
  //        }
  //      }
  //
  //        // check diagonal-top left bottom right
  //          if (grid[0][0] !== ' ' &&
  //          grid[0][0] === grid [1][1] &&
  //          grid[0][0] === grid [2][2]) {
  //           return grid [0][0]
  //         }
  //
  //         //check diagonal-bottom left top right
  //         if (grid[2][0] !== ' ' &&
  //         grid[2][0] === grid [1][1] &&
  //         grid[2][0] === grid [0][2]) {
  //          return grid [2][0]
  //        }
  //
  //        for (var i = 0; i < 3; i++) {
  //          for (var i = 0; i < 3; i++){
  //            if (grid[i][j] === ' ') {
  //              return false
  //          }
  // }}
  //        return null;
  //
  $('.col').click(function () {
    $(this).html(userToken)
    const i = $(this).data('i')
    const j = $(this).data('j')
    grid[i][j] = userToken
  })
//     if (isGameOver()) {
//
//      } else {
//        oppTurn
//
//   //  $('#testToggle').close(function () {
//   //    $('.container').toggle()
})
