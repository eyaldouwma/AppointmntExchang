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
let refUsers = db.ref("appointmexchang/users");

//var doctorsRef = ref.child("doctors");
















// let count  = 0;
// // doctorsRef.orderByChild("full_name").on("child_added", function(snapshot) {
// //     console.log("the doctor name is " + snapshot.val().full_name + " and his specialty " + snapshot.val().e_type);
// //   });


// // usersRef.set({
// //     alanisawesome: {
// //         date_of_birth: "June 23, 1912",
// //         full_name: "Alan Turing"
// //     },
// //     gracehop: {
// //         date_of_birth: "December 9, 1906",
// //         full_name: "Grace Hopper"
// //     }
// // });

// // var hopperRef = usersRef.child("gracehop");
// // hopperRef.update({
// //     "nickname": "Amazing Grace"
// // });

// // usersRef.on("value", function(snapshot) {
// //     console.log(snapshot.val());
// //   }, function (errorObject) {
// //     console.log("The read failed: " + errorObject.code);
// //   });


// // var postsRef = ref.child("posts");

// // var newPostRef = postsRef.push();
// // newPostRef.set({
// //   author: "gracehop",
// //   title: "Announcing COBOL, a New Programming Language"
// // });


// // var scoresRef = db.ref("users");
// // scoresRef.orderByValue().on("value", function(snapshot) {
// //   snapshot.forEach(function(data) {
// //     console.log("The user name " + data.key + " and his/her birth date: " + data.val());
// //   });
// // });

// app.get('http://localhost:3001/',(req, res) => {
//     res.send('HELLO');
// })



module.exports = app;

