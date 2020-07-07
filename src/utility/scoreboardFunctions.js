;(function(env) {

  var scoreboardFunctions = function(method, url, userObj){ return new scoreboardFunctions.init(method, url, userObj)[method] }

  scoreboardFunctions.init = function(method, url, userObj){ this[method] = this[method](url, userObj) }

  scoreboardFunctions.prototype = {
    get: function(url) {
      return fetch(url)
      .then(res => res.json())
    },

    post: function(url, playerObj) {
      return fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
          "Accept": ['application/json', 'application/x-www-form-urlencoded'],
          "Content-Type": ['application/json', 'application/x-www-form-urlencoded']
        },
        body: JSON.stringify(playerObj)
      })
      .then(res => res.json())
    }
  }

  scoreboardFunctions.init.prototype = scoreboardFunctions.prototype

  module.exports = scoreboardFunctions

  return scoreboardFunctions.init

})(typeof window === "undefined" ? global : window)