'use strict'
const store = require('../store.js')

const startGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const indexOfGame = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      id: '',
      cell: [],
      over: ''
    }
  })
}

module.exports = {
  startGame,
  indexOfGame
}
