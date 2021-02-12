'use strict'
const authEvents = require ('./auth/event')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

$("sign-up").on('submit', authEvents.onSignup)

$("sign-In").on('click', authEvents.onSignin)

})
