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

const updateGame = function (value, index, status) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: status
      }
    }
  })
}

module.exports = {
  startGame,
  updateGame,
  indexOfGame
}
