const api = require('./api')

const ui = require('./ui')

//const getFormFields =require('')

const onSignUp = function(event){
  event.preventDefault()
console.log('hello there!')

const form = event.target
const data = getFormFields(form)
console.log(data)

api.signUp(data)
.then(ui.signUpSuccess)
.catch(ui.signUpFailure)

}

const onSignIn = function(event){
  event.preventDefault()
console.log('hello there!')

const form = event.target
const data = getFormFields(form)
console.log(data)

api.signIn(data)
.then(ui.signInSuccess)
.catch(ui.signInFailure)

}
module.exports = {
onSignUp,
onSignIn
}
