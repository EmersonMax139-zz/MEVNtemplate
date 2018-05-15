// MAIN SERVER FILE
// THIS IS RUN WITH npm start
//
// express() -- used as app.() -- controls routes and and the server itself

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


// points express() to the individual routes  files
var bounties = require('./routes/bounties.js');
app.use('/bounties', bounties);
var users = require('./routes/users.js');
app.use('/users', users);



// ------ MONGOOSE DB -------
// THIS IS WHERE ISSUE IS CURRENTLY --
// Need to get separate User schema/separate database for users
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/bounties');
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback) {
//   console.log("Connection succeeded")
// });

// ---- MONGOOSE MODEL(S) -------
// var Bounty = require("../models/bounty");
// var User = require("../models/user")

// passport -- User Authentication Middleware
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// ---------------------------------------------------





// SERVER
app.listen(process.env.PORT || 8081)
