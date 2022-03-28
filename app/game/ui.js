const store = require('../store.js')
const events = require('./events.js')

const onGameStartSuccess = function (response) {
  console.log(response)
  store.game = response.game
  store.gameId = response.game.id
  return true
}

const onGameStartFailure = function () {
  $('#auth-display').html('<p>Error while starting game</p>')
}

const onCellClick = function () {
  $('#messageBox').text(events.currentPlayer + ' made a choice')
}

module.exports = {
  onGameStartSuccess,
  onGameStartFailure,
  onCellClick
}
