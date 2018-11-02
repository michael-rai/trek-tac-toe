/* const baseUrl = 'http://tic-tac-toe.wdibos.com'

const onSignUpFromApi = function (id) {
  return $.ajax({
    url: baseUrl + `/sign-up/${id}`,
    method: 'POST',
    data: createObject
  })
}
*/
const config = require('./config.js')
const store = require('./store.js')

const createGame = function (){
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token' + store.user.token
    },
    data: {},
  })
}

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
    "credentials": {
      "email": `${EMAIL}`,
      "password":`${PASSWORD}`,
    }
  }
  }
  )

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
    "credentials": {
      "email": `${EMAIL}`,
      "password":`${PASSWORD}`,
    }
  }
  }
  )

module.exports = {
  signUp,
  signIn,
  createGame,
}
