const store = require('../store.js')

const onGameStartSuccess = function (response) {
  console.log(response)
  store.game = response.game
  store.gameId = response.game.id
  return true
}

module.exports = {
  onGameStartSuccess
}
