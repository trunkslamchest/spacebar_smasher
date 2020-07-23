const functions = require('firebase-functions')

const firebase = require("firebase")

const admin = require('firebase-admin')

const url = {
  database: 'http://localhost:9000?ns=spacebarsmasher-96ba1',
  // database: 'https://spacebarsmasher-96ba1.firebaseio.com',
  rootSecured: 'https://localhost:3000',
  // rootSecured: 'https://trunkslamchest.com',
  rootUnsecured: 'http://localhost:3000'
  // rootUnsecured: 'http://trunkslamchest.com'
}

var firebaseConfig = {
  databaseURL: url.database
}

var init = firebase.initializeApp(firebaseConfig)
// var db = init.database()

admin.initializeApp()
// init.database()


exports.players = functions
  .region('us-east1')
  .https.onRequest((req, res) => {

    res.set('Access-Control-Allow-Methods', ['GET', 'OPTIONS'])

    if(req.headers.origin === url.rootSecured || url.rootUnsecured ) { res.set('Access-Control-Allow-Origin', `${req.headers.origin}`) }

    let players = []

    var sorted = firebase.database().ref('/players').orderByChild('score')

    var parsed = sorted.once('value', function(player){
      player.forEach(function(snap) { players.unshift(snap.val()) })
      setTimeout(() => {
        res.json({players})
      }, 2000)
    })

  return parsed
});

exports.addScore = functions
  .region('us-east1')
  .https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Methods', ['POST', 'OPTIONS'])
    res.set('Access-Control-Allow-Headers', ['Content-Type', 'Accept'])

    if(req.headers.origin === url.rootSecured || url.rootUnsecured ) res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)

    var obj = { }

    var createKey = firebase.database().ref().child('players').push().key

    obj['/players/' + createKey] = req.body

    firebase.database().ref().update(obj)

    setTimeout(() => {
      res.status(200).json(Object.values(obj)[0])
    }, 1000)
});
