export const fetch = {
  // get: 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players',
  get: 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players',
  // post: 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/addScore'
  post: 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/addScore'
}

export const routes = {
  root: '/',
  home: '/spacebarsmasher',
  game: '/spacebarsmasher/game',
  scoreboard: '/spacebarsmasher/scoreboard'
}