// MAIN SERVER FILE
// THIS IS RUN WITH npm start
//
// express() -- used as app.() -- controls routes and and the server itself

const express = require('express')
const app = express()
const router = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


// --------- MONGOO DB ------------
// This is the only place connection needs to be.
//
const uri = "mongodb://Emerjawn:1xander@ds245150.mlab.com:45150/tudr";

mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection succeeded")
});

// ---------- STATIC FOlDER ---------
// this serves the client application.
app.use(express.static('./public'));

router.get ('/', function(req, res) {
	res.sendFile('index.html');
});

// ---------- ROUTES --------------
// points the server (this file) to the individual routes files
var bounties = require('./routes/bounties.js');
app.use('/api/bounties', bounties);
var users = require('./routes/users.js');
app.use('/api/users', users);


// passport -- User Authentication Middleware
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// ---------------------------------------------------


// SERVER
app.listen(process.env.PORT || 8081)
