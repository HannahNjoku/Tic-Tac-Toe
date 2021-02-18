const store = require('../store')

const signUpSuccess = function(response){
  $('#success-message').text('Sign up successful. Enjoy the game')
  $('#sign-up').trigger('reset')
    $('#change-password').show()
    $('#sign-in').show()
}

const signUpFailure = function(response){
  $('#error-message').text('Sign up incomplete, try again')
}

const signInSuccess = function(response){
  $('#success-message').text('Sign in was successful. Enjoy the game')
  $('#sign-up').trigger('reset')
  $('.container').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('.showgamesbutton').show()
  $('.startgamebutton').show()
  $('.buttoncontainer').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.loginform').hide()



    store.user = response.user
}

const signInFailure = function(response){
  $('#error-message').text('Sign in failed, try again')
}

const changePasswordSuccess = function(){
  $('#success-message').text('Password changed')
  $('#change-password').trigger('reset')

  $('#sign-out').show()
}

const changePasswordFail = function(response){
  $('#error-message').text('Change Password attempt failed, try again')
}

const signOutSuccess = function(){
  $('#success-message').text('Signed Out')
  $('#sign-out').trigger('reset')
}

const signOutFail = function(response){
  $('#error-message').text('Not Signed out, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
