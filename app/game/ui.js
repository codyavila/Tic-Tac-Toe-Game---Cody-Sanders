const store = require('../store.js')
// const events = require('./events.js')

const onGameStartSuccess = function (response) {
  console.log(response)
  store.game = response.game
  store.gameId = response.game._id
  return true
}

const onGameStartFailure = function () {
  $('#auth-display').html('<p>Error while starting game</p>')
}

module.exports = {
  onGameStartSuccess,
  onGameStartFailure

}
