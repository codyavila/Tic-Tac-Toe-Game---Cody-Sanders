'use strict'

const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const store = require('../store.js')
// const getFormFields = require('../../lib/get-form-fields.js')

const onGameStart = function (event) {
  store.player1 = 'X'
  store.player2 = 'O'
  store.currentPlayer = 'X'
  store.over = false
  store.cells = ['', '', '', '', '', '', '', '', '']
  event.preventDefault()
  gameApi.startGame()
    .then((response) => gameUi.onGameStartSuccess(response))
    .catch(() => gameUi.onGameStartFailure)
}

const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    store.currentPlayer = 'X'
  }
}

const boxClick = function (event) {
  if ($(event.target).html() === '' && store.over === false) {
    if (store.currentPlayer === store.player1) {
      store.cells[event.target.id] = 'X'
      $(event.target).html('X')
      gameApi.updateGame('X', store.game._id, false)
      switchPlayer()
    } else if (store.currentPlayer === store.player2) {
      store.cells[event.target.id] = 'O'
      $(event.target).html('O')
      gameApi.updateGame('O', store.game._id, false)
      switchPlayer()
    }
    console.log(store.cells)
  }
}

const onUpdateGame = function (event) {
  event.preventDefault()
  // clear board but don't refresh page
  gameApi.startGame()
}
module.exports = {
  onGameStart,
  switchPlayer,
  boxClick,
  onUpdateGame
}
