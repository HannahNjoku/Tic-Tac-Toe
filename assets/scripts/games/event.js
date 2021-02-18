const api = require('./api')

const ui = require('./ui')
const store = require('../store')

const getFormFields =require('../../../lib/get-form-fields')



const onGameBoardClick = function (event) {
  const create = store.game
  event.preventDefault()
  const selectedDivIndex = $(this).data("cellIndex")

    $(this).append(currentPlayer)

    api.playerMove(selectedDivIndex)
    .then(ui.playerMoveSuccess)
    .catch(ui.playerMoveFailure)
}


module.exports = {
onGameBoardClick,
create
}
