const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  console.log('success')
  const data = getFormFields(event.target)
  // take this data and send to our server post to api must have token
  // using an http request
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log('success')
  const data = getFormFields(event.target)
  // take this date and send to our server
  // data = {
  //  game: {
  //    cell: {
  //      index: cell.data.cell.index
  //      value: celladata.cell.value
  //    }
  //  },
  // over: false
  // }
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

module.export = {
  onSignUp,
  onSignIn
}
