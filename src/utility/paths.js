export const fetch = {
  // get: 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players',
  // post: 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/addScore'
  get: 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players',
  post: 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/addScore'
}

export const routes = {
  root: '/',
  home: '/testSub',
  game: '/testSub/game',
  countdown: '/testSub/countdown',
  submitScore: '/testSub/submit_score',
  scoreboard: '/testSub/scoreboard'
  // home: '/spacebarsmasher',
  // game: '/spacebarsmasher/game',
  // countdown: '/spacebarsmasher/countdown',
  // submitScore: '/spacebarsmasher/submit_score',
  // scoreboard: '/spacebarsmasher/scoreboard'
}