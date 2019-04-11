const express = require('express');

const app = express();

const admin = require('firebase-admin');

var serviceAccount = require('./service_packFireBase');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://appointmexchang.firebaseio.com'
});

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("test/sub_test");

ref.once("value", function (snapshot) {
    console.log(snapshot.val());
});

var usersRef = ref.child("users");
usersRef.set({
    alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});

var hopperRef = usersRef.child("gracehop");
hopperRef.update({
    "nickname": "Amazing Grace"
});


var postsRef = ref.child("posts");

var newPostRef = postsRef.push();
newPostRef.set({
  author: "gracehop",
  title: "Announcing COBOL, a New Programming Language"
});

// dataRef.set("I'm writing data", function(error) {
//     if (error) {
//       alert("Data could not be saved." + error);
//     } else {
//       alert("Data saved successfully.");
//     }
//   });

module.exports = app;