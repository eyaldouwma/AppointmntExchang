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














module.exports = app;
