const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDkDX4Q7Bpov4OrnRCUVEyBxzXBWhlyWcs",
  authDomain: "dorset-team-4-ticketing-71ecb.firebaseapp.com",
  projectId: "dorset-team-4-ticketing-71ecb"
});

var db = firebase.firestore();

var menu = [{
    "horizontal": "1",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "A",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "B",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "C",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "D",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "E",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "F",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "G",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "H",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "I",
    "isTaken": false
  },
  {
    "horizontal": "1",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "2",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "3",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "4",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "5",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "6",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "7",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "8",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "9",
    "vertical": "J",
    "isTaken": false
  },
  {
    "horizontal": "10",
    "vertical": "J",
    "isTaken": false
  }
];

menu.forEach(function (obj) {
  db.collection("menu").add({
      horizontal: obj.horizontal,
      vertical: obj.vertical,
      isTaken: obj.isTaken,
    }).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
