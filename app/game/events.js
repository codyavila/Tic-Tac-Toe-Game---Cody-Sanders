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
      checkForWin()
      switchPlayer()
    } else if (store.currentPlayer === store.player2) {
      store.cells[event.target.id] = 'O'
      $(event.target).html('O')
      gameApi.updateGame('O', store.game._id, false)
      checkForWin()
      switchPlayer()
    }
    console.log(store.cells)
  }
}

const onRestartGame = function (event) {
  event.preventDefault()
  clearBoard()
  gameApi.startGame()
}

const checkForWin = function () {
  const cells = store.cells
  // for horizontal wins X
  if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
  } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
  } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // for vertical wins for X
  } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
  } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
  } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // for diagonal wins for X
  } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
  } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // for horizontal wins for O
  } else if (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  } else if (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  } else if (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // for vertical wins for O
  } else if (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  } else if (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  } else if (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // for diagonal wins for O
  } else if (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  } else if (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  }
  console.log(store.game.over)
}

const clearBoard = function () {
  store.game.over = false
  store.cells = ['', '', '', '', '', '', '', '', '']
  $('.board').css('display', 'block')
  $('.box').text('')
}

module.exports = {
  onGameStart,
  switchPlayer,
  boxClick,
  onRestartGame,
  clearBoard
}
