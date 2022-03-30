'use strict'

const store = require('../store.js')
// const gameApi = require('./api.js')
// const gameEvents = require('./events.js')

// const events = require('./events.js')

const onGameStartSuccess = function (response) {
  $('#game-board').show()
  $('#game-display').show()
  console.log(response)
  store.game = response.game
  store.gameId = response.game.id
  // return true
}

const onGameStartFailure = function () {
  $('#game-display').html('<p>Error while starting game</p>')
}

const xWinCondition = function () {
  $('#game-display').html('<p>X Wins! Woo Hoo!</p>')
}

const oWinCondition = function () {
  $('#game-display').html('<p>O Wins! Better luck next time X!</p>')
}

const onTieCondition = function () {
  store.game.over = false
  $('#game-display').html('<p>Looks like a stalemate! Hit restart to try again or log out.</p>')
}

module.exports = {
  onGameStartSuccess,
  onGameStartFailure,
  xWinCondition,
  oWinCondition,
  onTieCondition
}
