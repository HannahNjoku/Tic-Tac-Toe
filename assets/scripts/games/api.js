const config = require('../config')

const store = require('../store')


const index = function (data){
  return $.ajax({
    method:'GET',
    url: config.apiUrl + '/games',
    data: data
  })
}

const create = function (data){
  return $.ajax({
    method:'POST',
    url: config.apiUrl + '/games',
    data: {},
    header: {
      authorization:'Bearer ' + store.user.token
    },
  })
}

const show = function (data){
  return $.ajax({
    method:'GET',
    url: config.apiUrl + '/games/:id',
    data: data
  })
}


const update = function (cellIndex){
  return $.ajax({
    method:'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    header: {
      authorization:'Bearer ' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": cellIndex,
          "value": store.currentPlayer,
        },
        "over": false
  }
}
  })
}
module.exports = {
newGame,
Pl

}
