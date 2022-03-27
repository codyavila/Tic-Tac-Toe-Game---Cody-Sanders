'use strict'

const gameUi = require('./ui.js')
const gameApi = require('./api.js')
// const getFormFields = require('../../lib/get-form-fields.js')

const onGameStart = function (event) {
  event.preventDefault()
  console.log('In Events!')

  gameApi
    .startGame()
    .then((response) => gameUi.onGameStartSuccess(response))
    .catch(() => gameUi.onGameStartFailure)
}

module.exports = {
  onGameStart
}
