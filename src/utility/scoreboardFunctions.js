;(function(env) {

  var scoreboardFunctions = function(method, url, userObj){
    var init = new scoreboardFunctions.init(method, url, userObj)
    return init[method]
  }

  scoreboardFunctions.init = function(method, url, userObj){
    this[method] = this[method](url, userObj)
  }

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

    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Accept": 'application/json',
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(playerObj)
    //   })
    //   .then(res => console.log(res))
    //   // .then(obj => console.log(obj))
    // }
  }

  scoreboardFunctions.init.prototype = scoreboardFunctions.prototype

  module.exports = scoreboardFunctions

  return scoreboardFunctions.init

})(typeof window === "undefined" ? global : window)