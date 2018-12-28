// const baseUrl = 'http://tic-tac-toe.wdibos.com'

// const onSignUpFromApi = function (id) {
//   return $.ajax({
//     url: baseUrl + `/sign-up/${id}`,
//     method: 'POST',
//     data: {}
//   })
// }

const config = require('./config.js')
// const store = require('./store.js')

// const createGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token' + store.user.token
//     },
//     data: {}
//   })
// }

// const patchMove = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games/:id',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token' + store.user.token
//     },
//     data: {}
//   })
// }
// linter errors below for email and password not being defined!
// const signUp = data => {
//   return $.ajax({
//     url: config.apiUrl + '/sign-up',
//     method: 'POST',
//     data: {
//       'credentials': {
//         'email': `${EMAIL}`,
//         'password': `${PASSWORD}`
//       }
//     }
//   }
//   )
// }
//

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  }
  )
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  }
  )
}

// module.exports = {
//   // onSignUpFromApi,
//   signUp,
//   signIn
//   // createGame,
//   // patchMove
// }

module.exports = {
  // onSignUpFromApi,
  signUp,
  signIn
  // createGame,
  // patchMove
}
