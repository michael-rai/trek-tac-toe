'use strict'

const events = require('./events.js')

const userToken = 'X'
// const oppToken = 'Y'
// const showGame = function () {
//   document.getElementByClass('container').setAttribute('hidden', 'false')
// }

$(() => {
  console.log('js is running')
  $('#signUpFormModal').on('submit', events.onSignUp)
  $('#loginFormModal').on('submit', events.onSignIn)
  // after sucessfully signing up/in the game will show..for now i will use a click event on enlist/take Off
  // $('#ready').click(showGame)

  // the following code can be attributed to Cody Seibert via Youtube at https://www.youtube.com/watch?v=ra2_rKV0mDE

  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  //  const isGameOver = function () {
  //     // check horizontal
  //     for (let i = 0; i < 3; i++) {
  //       if (grid[i][0] !== ' ' &&
  //          grid[i][0] === grid[i][1] &&
  //          grid[i][0] === grid[i][2]) {
  //         return grid[i][0]
  // } else
  //       // check vertical
  //        for (let j = 0; j < 3; j++) {
  //         if (grid[0][j] !== ' ' &&
  //           grid[0][j] === grid [1][j] &&
  //           grid[0][j] === grid [2][j]) {
  //            return grid [0][j]
  //           }
  //        } elsif
  //          // check diagonal-top left bottom right
  //            (grid[0][0] !== ' ' &&
  //            grid[0][0] === grid [1][1] &&
  //            grid[0][0] === grid [2][2])
  //             return grid [0][0]
  //           } elseif
  //           //check diagonal-bottom left top right
  //          (grid[2][0] !== ' ' &&
  //           grid[2][0] === grid [1][1] &&
  //           grid[2][0] === grid [0][2])
  //            return grid [2][0]
  //          }
  //
  //          for (let i = 0; i < 3; i++) {
  //            for (let j = 0; j < 3; j++){
  //              if (grid[i][j] === ' ') {
  //                return false;
  //              }
  //            }
  //          }
  //        return null
  //
  //
  //     const moveAi = function() {
  //       for (var i = 0; i < 3; i++) {
  //         for (var j = 0; j < 3; j++){
  //           if (grid[i][j] === ' ') {
  //             return {
  //               i: i,
  //               j: j
  //             }
  //           }
  //         }
  //       }
  //       return null;
  //       }
  // actually click function below:
  $('.col').click(function () {
    $(this).html(userToken)
    const i = $(this).data('i')
    const j = $(this).data('j')
    grid[i][j] = userToken
  })
})

//     let gameState = isGameOver()
//     if (gameState) {
//       alert('game over: ' + gameState)
//     } else {
//       const move = moveAi()
//       grid[move.i][move.j] = oppToken
//       $('.col[data-i=' + move.i + '] [data-j' + move.j + ']').html(oppToken)
//     }
//
//     gameState = isGameOver()
//     if (gameState) {
//       alert('game over: ' + gameState)
//     }
//   }
//
//   )
// }
