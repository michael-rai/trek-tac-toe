// const store = require('../store.js')

const signUpSuccess = data => {
  $('#message1').text('YOU HAVE ENLISTED..NOW GO TAKE OFF!')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  // unhide game board, purge, and scorekeepers
  console.log('signUpSuccess ran. data is : ', data)
}

const signUpFailure = data => {
  $('#message1').text('Sign up unsucessful')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  console.error('signUpFailure ran. Error is: ', data)
}

const signInSuccess = data => {
  // store.user = data.user
  document.getElementById('score-keeper').hidden = false
  document.getElementById('score-keeper2').hidden = false
  document.getElementById('container').hidden = false
  document.getElementById('btn-down').hidden = false
  $('#message2').text('Signed in successful')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.log('signInSuccess ran. data is : ', data)
}

const signInFailure = data => {
  $('#message2').text('Sign in unsucessful')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.error('signInFailure ran. Error is: ', data)
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure
}
