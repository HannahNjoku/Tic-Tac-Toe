const store = require('../store')

const signUpSuccess = function(response){
  $('#success-message').text('Sign up successful. Enjoy the game')
  $('#sign-up').trigger('reset')
    $('#change-password').hide()
    $('#sign-in').hide()
}

const signUpFailure = function(response){
  $('#error-message').text('Sign up incomplete, try again')
}

const signInSuccess = function(response){
  $('success-message').text('Sign in was successful. Enjoy the game')
  $('#sign-up').trigger('reset')

    store.user = response.user

  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function(response){
  $('error-message').text('Sign in failed, try again')
}

const changePasswordSuccess = function(){
  $('success-message').text('Password changed')
  $('#change-password').trigger('reset')

  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
}

const changePasswordFail = function(response){
  $('error-message').text('Change Password attempt failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFail
}
