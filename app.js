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

// Place mongoDB or mLab connection here
// https://docs.mongodb.com/manual/reference/connection-string/
const uri = 'mongodb://localhost:27017/posts'


mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection succeeded")
});

// ---------- STATIC FOlDER ---------
// this serves the client application.
// for testing use 'npm run dev' and go to localhost:8080
app.use(express.static('./public'));

router.get ('/', function(req, res) {
	res.sendFile('index.html');
});

// ---------- ROUTES --------------
// points the server (this file) to the individual routes files
var posts = require('./routes/posts.js');
app.use('/api/posts', posts);
var users = require('./routes/users.js');
app.use('/api/users', users);


// passport -- User Authentication Middleware
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// ---------------------------------------------------


// SERVER
app.listen(process.env.PORT || 8081)
