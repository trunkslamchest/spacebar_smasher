const functions = require('firebase-functions');

const firebase = require("firebase")

const admin = require('firebase-admin');
admin.initializeApp();

var firebaseConfig = {
  // Point to the RTDB emulator running on localhost.
  // In almost all cases the ns (namespace) is your project ID.
  databaseURL: "http://localhost:9000?ns=spacebarsmasher-96ba1"
  // databaseURL: "https://spacebarsmasher-96ba1.firebaseio.com"
}

var init = firebase.initializeApp(firebaseConfig);
var db = init.database();

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

// // Take the text parameter passed to this HTTP endpoint and insert it into
// // Cloud Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   // Send back a message that we've succesfully written the message
//   res.json({result: `Message with ID: ${writeResult.id} added.`});
// });

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
// exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
//     .onCreate((snap, context) => {
//       // Grab the current value of what was written to Cloud Firestore.
//       const original = snap.data().original;

//       // Access the parameter `{documentId}` with `context.params`
//       functions.logger.log('Uppercasing', context.params.documentId, original);

//       const uppercase = original.toUpperCase();

//       // You must return a Promise when performing asynchronous tasks inside a Functions such as
//       // writing to Cloud Firestore.
//       // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
//       return snap.ref.set({uppercase}, {merge: true});
//     });

// exports.messages = functions.https.onRequest(async (req, res) => {

//   console.log(req)
//   res.send(req.body)

//   // res.json({result: req.query.text});
//   // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//   // const writeResult = await admin.firestore().collection('messages').add({original: original});
//   // Send back a message that we've succesfully written the message
//   // res.json({result: `Message with ID: ${writeResult.id} added.`});
// });

exports.players = functions
  .region('us-east1')
  .https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    let players = []
  //   var getAll = db.ref('/players').once('value', function(player){
  //     player.forEach(function(snap) {
  //       // var key = snap.key
  //       // var data = snap.val()
  //       players.push(snap.val())
  //       // console.log(data.score)
  //     // console.log(snap.val())
  //     })
  //   // console.log(players)
  //   res.json({players})
  // })

  var sorted = firebase.database().ref('/players').orderByChild('score').limitToLast(20)

  var parsed = sorted.once('value', function(player){
    player.forEach(function(snap) {
      players.unshift(snap.val())
    })
    res.json({players})
  })

  // console.log(parsed)

  return parsed
});
