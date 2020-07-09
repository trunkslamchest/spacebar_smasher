const functions = require('firebase-functions');

const firebase = require("firebase")

const admin = require('firebase-admin');
admin.initializeApp();

var firebaseConfig = {
  // databaseURL: "http://localhost:9000?ns=spacebarsmasher-96ba1"
  databaseURL: "https://spacebarsmasher-96ba1.firebaseio.com"
}

var init = firebase.initializeApp(firebaseConfig);
var db = init.database();

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

exports.players = functions
  .region('us-east1')
  .https.onRequest((req, res) => {

    res.set('Access-Control-Allow-Methods', ['GET', 'OPTIONS'])

    if(req.headers.origin === 'http://localhost:3000' || 'http://trunkslamchest.com' ) {
      res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)
    }

    let players = []

    var sorted = firebase.database().ref('/players').orderByChild('score').limitToLast(20)

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

    if(req.headers.origin === 'http://localhost:3000' || 'http://trunkslamchest.com' ) {
      res.set('Access-Control-Allow-Origin', `${req.headers.origin}`)
    }

    var obj = { }

    var newKey = firebase.database().ref().child('players').push().key

    obj['/players/' + newKey] = req.body

    firebase.database().ref().update(obj)

    res.status(200).json(obj)
});
