export const fetch = {
  // get: 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players',
  get: 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players',
  // post: 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/addScore'
  post: 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/addScore'
}

export const routes = {
  root: '/',
  // home: '/spacebarsmasher',
  home: '/testSub',
  // game: '/spacebarsmasher/game',
  game: '/testSub/game',
  // countdown: '/spacebarsmasher/countdown',
  countdown: '/testSub/countdown',
  // submitScore: '/spacebarsmasher/submit_score',
  submitScore: '/testSub/submit_score',
  // scoreboard: '/spacebarsmasher/scoreboard'
  scoreboard: '/testSub/scoreboard'
}