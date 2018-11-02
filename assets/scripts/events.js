const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  console.log('success')
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this date and send to our server
  // using an http request
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  console.log('success')
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this date and send to our server
  // using an http request
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
module.export = {
  onSignUp,
  onSignIn
}
