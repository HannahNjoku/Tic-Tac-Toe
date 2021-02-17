'use strict'
const authEvents = require ('./auth/event')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $("#sign-up").on('submit', authEvents.onSignUp)

  $("#sign-in").on('submit', authEvents.onSignIn)

  $("#change-password").on('submit', authEvents.onChangePassword)
  $("#change-password").hide()
  $(".container").hide()
})
