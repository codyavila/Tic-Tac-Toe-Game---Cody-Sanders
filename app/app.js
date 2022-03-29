// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // game events
  $('#game-start').on('click', gameEvents.onGameStart)
  $('.box').on('click', gameEvents.boxClick)
  $('#game-restart').on('click', gameEvents.onRestartGame)
})
