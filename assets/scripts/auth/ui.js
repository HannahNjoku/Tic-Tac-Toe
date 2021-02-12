const signUpSuccess = function(response){
  $('success-message').text('Sign up successful. Enjoy the game')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function(response){
  $('error-message').text('Sign up incomplete, try again')
}

const signInSuccess = function(response){
  $('success-message').text('Sign in was successful. Enjoy the game')
  $('#sign-up').trigger('reset')
}

const signInFailure = function(response){
    $('error-message').text('Thanks for signing in')
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
