const functions = require('firebase-functions');

const firebase = require("firebase")

const admin = require('firebase-admin');
admin.initializeApp();

const url = {
  // database: 'http://localhost:9000?ns=spacebarsmasher-96ba1',
  database: 'https://spacebarsmasher-96ba1.firebaseio.com',
  // rootSecured: 'https://localhost:3000',
  rootSecured: 'https://trunkslamchest.com',
  // rootUnsecured: 'http://localhost:3000'
  rootUnsecured: 'http://trunkslamchest.com'
}

var firebaseConfig = {
  databaseURL: url.database
}

var init = firebase.initializeApp(firebaseConfig);
var db = init.database();

exports.players = functions
  .region('us-east1')
  .https.onRequest((req, res) => {

    res.set('Access-Control-Allow-Methods', ['GET', 'OPTIONS'])

    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000' )

    // if(req.headers.origin === 'http://trunkslamchest.com' || 'https://trunkslamchest.com' ) {
    //   res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)
    // }

    if(req.headers.origin === url.rootSecured || url.rootUnsecured ) {
      res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)
    }

    let players = []

    var sorted = firebase.database().ref('/players').orderByChild('score')

    var parsed = sorted.once('value', function(player){
      player.forEach(function(snap) { players.unshift(snap.val()) })
      res.json({players})
    })

  return parsed
});

exports.addScore = functions
  .region('us-east1')
  .https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Methods', ['POST', 'OPTIONS'])
    res.set('Access-Control-Allow-Headers', ['Content-Type', 'Accept'])

    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000' )

    // if(req.headers.origin === 'http://trunkslamchest.com' || 'https://trunkslamchest.com' ) {
    //   res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)
    // }

    if(req.headers.origin === url.rootSecured || url.rootUnsecured ) {
      res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)
    }

    var obj = { }

    var createKey = firebase.database().ref().child('players').push().key

    obj['/players/' + createKey] = req.body

    firebase.database().ref().update(obj)

    res.status(200).json(obj)
});
