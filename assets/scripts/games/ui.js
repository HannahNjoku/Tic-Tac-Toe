const store = require('../store')

const signUpSuccess = function(response){
  $('#success-message').text('Sign up successful. Enjoy the game')
  $('#sign-up').trigger('reset')
    $('#change-password').hide()
    $('#sign-in').show()
}



module.exports = {
  signUpSuccess,

}
