'use strict'

const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const store = require('../store.js')
// const getFormFields = require('../../lib/get-form-fields.js')

// Function for when the game initiates
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

// Function to check player string and switch strings
const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    store.currentPlayer = 'X'
  }
}

// Function for when the box gets clicked
const boxClick = function (event) {
  // If the html has an empty string and game isnt over
  if ($(event.target).html() === '' && store.game.over === false) {
    // if player 1 is strictly equal to player current player
    if (store.currentPlayer === store.player1) {
      // adds string to index
      store.cells[event.target.id] = 'X'
      // Adds html string to cell target
      $(event.target).html('X')
      gameApi.updateGame('X', store.game._id, false)
      // runs check for tie loop
      checkForTie()
      // Runs check for win function if statements
      checkForWin()
      // runs switch player if condition
      switchPlayer()
    } else if (store.currentPlayer === store.player2) {
      // if player 1 is strictly equal to player current player
      store.cells[event.target.id] = 'O'
      // adds string to index
      $(event.target).html('O')
      gameApi.updateGame('O', store.game._id, false)
      // runs check for tie loop
      checkForTie()
      // runs switch player if condition
      switchPlayer()
      // Runs check for win function if statements
      checkForWin()
    }
    console.log(store.cells)
  }
}

// restart game function
const onRestartGame = function (event) {
  event.preventDefault()
  clearBoard()
  gameApi.startGame()
}

const checkForWin = function () {
  const cells = store.cells
  // X WINS
  // X Top Row
  if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // X Middle Row
  } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // X Bottom Row
  } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // X Left Column
  } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // X Middle Column
  } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // X Right Column
  } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // Left X Down Diag
  } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // Right X Down Diag
  } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
    store.game.over = true
    gameUi.xWinCondition()
    // O WINS
    // O Top Row
  } else if (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // O Middle Row
  } else if (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // O Bottom Row
  } else if (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // O Left Column
  } else if (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // O Middle Column
  } else if (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // O Right Column
  } else if (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // Left O Down Diag
  } else if (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
    // Right O Down Diag
  } else if (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') {
    store.game.over = true
    gameUi.oWinCondition()
  }
}

// Clears the board and resets all settings
const clearBoard = function () {
  store.currentPlayer = 'X'
  store.game.over = false
  store.cells = ['', '', '', '', '', '', '', '', '']
  $('.board').css('display', 'block')
  $('.box').html('')
  $('#game-display').html('')
}

// for loop to check if cell index is blank or not
const checkForTie = function () {
  for (let i = 0; i < store.cells.length; i++) {
    if (store.cells[i] === '') {
      return false
    }
  }
  // once return = true, run this function
  gameUi.onTieCondition()
}

module.exports = {
  onGameStart,
  switchPlayer,
  boxClick,
  onRestartGame,
  clearBoard
}
