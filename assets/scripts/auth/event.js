const api = require('./api')

const ui = require('./ui')

const getFormFields =require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('hello there!')

  const form = event.target
  const data = getFormFields(form)
  console.log('This is data in sign-up', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)

}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('hello Sign in attempt!')

  const form = event.target
  const data = getFormFields(form)
  console.log('This is data in sign-in!', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

}

const onChangePassword = function(event){
  event.preventDefault()
  console.log('did it work?')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)

}


module.exports = {
onSignUp,
onSignIn,
onChangePassword
}
