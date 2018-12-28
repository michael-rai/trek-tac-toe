const store = require('./store.js')

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
  $('#message1').addClass('sign up failure')
  console.error('signUpFailure ran. Error is: ', data)
}

const signInSuccess = data => {
  store.user = data.user
  $('#exampleModal').modal('toggle')
  document.getElementById('score-keeper').hidden = false
  document.getElementById('score-keeper2').hidden = false
  document.getElementById('container').hidden = false
  document.getElementById('btn-down').hidden = false
  document.getElementById('navbar').hidden = false
  $('#message2').fadeIn(500)
  $('#message2').text('Signed in successfully')
  $('#message2').fadeOut(4000)
  $('#message2').removeClass()
  $('#message2').addClass('sign in success')
  console.log('signInSuccess ran. data is : ', data)
}

const signOutSuccess = data => {
  store.user = data.user
  // $('#exampleModal').modal('toggle')
  document.getElementById('score-keeper').hidden = true
  document.getElementById('score-keeper2').hidden = true
  document.getElementById('container').hidden = true
  document.getElementById('btn-down').hidden = true
  document.getElementById('navbar').hidden = true
  $('#message2').fadeIn(500)
  $('#message2').text('Signed Out successfully')
  $('#message2').fadeOut(4000)
  $('#message2').removeClass()
  $('#message2').addClass('sign out success')
  console.log('signOutSuccess ran. data is : ', data)
}

const signInFailure = data => {
  $('#message2').text('Sign in unsuccessful')
  $('#message2').removeClass()
  $('#message2').addClass('sign infailure')
  console.error('signInFailure ran. Error is: ', data)
}

const signOutFailure = data => {
  $('#message2').text('Sign out unsuccessful')
  $('#message2').removeClass()
  $('#message2').addClass('sign out failure')
  console.error('signOutFailure ran. Error is: ', data)
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
