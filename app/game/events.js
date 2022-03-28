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
  gameApi
    .startGame()
    .then((response) => gameUi.onGameStartSuccess(response))
    .catch(() => gameUi.onGameStartFailure)
  console.log(event)
}

const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    store.currentPlayer = 'X'
  }
}

const cellClick = function (event) {
  // if the cell clicked is both empty and the game is not over...
  if ($(event.target).text() === '' && store.over === false) {
    if (store.currentPlayer === store.player1) {
      store.cells[event.target.id] = 'X'
      $(event.target).html('X')
      switchPlayer()
    } else if (store.currentPlayer === store.player2) {
      store.cells[event.target.id] = 'O'
      $(event.target).html('O')
      switchPlayer()
    }
  }
}
module.exports = {
  onGameStart,
  switchPlayer,
  cellClick
}
