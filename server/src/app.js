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

// passport -- User Authentication Middleware
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// ---------------------------------------------------


// ------ MONGOOSE DB -------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bounties');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection succeeded")
});

// ---- MONGOOSE MODEL(S) -------
var Bounty = require("../models/bounty");


// Add new bounty
app.post('/bounties', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var difficulty = req.body.difficulty;
  var subject = req.body.subject;
  var length = req.body.length;
  var pay = req.body.pay;

  var new_bounty = new Bounty({
    title,
    description,
    difficulty,
    subject,
    length,
    pay,
  })

  new_bounty.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Bounty saved successfully!'
    })
  })
})

// // Fetch Bounties (and sort)
app.get('/bounties', (req, res) => {
  Bounty.find({}, 'title description difficulty subject length pay', function (error, bounties) {
    if (error) { console.error(error); }
    res.send({
      bounties: bounties
    })
  }).sort({_id:-1})
})

// Fetch single post
app.get('/bounty/:id', (req, res) => {
  var db = req.db;
  Bounty.findById(req.params.id, 'title description title description difficulty subject length pay', function (error, bounty) {
    if (error) { console.error(error); }
    res.send(bounty)
  })
})

// Update a post
app.put('/bounties/:id', (req, res) => {
  var db = req.db;
  Bounty.findById(req.params.id, 'title description title description difficulty subject length pay', function (error, bounty) {
    if (error) { console.error(error); }

    bounty.title = req.body.title
    bounty.description = req.body.description
    bounty.difficulty = req.body.difficulty
    bounty.subject = req.body.subject
    bounty.length = req.body.length
    bounty.pay = req.body.pay
    bounty.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
app.delete('/bounties/:id', (req, res) => {
  var db = req.db;
  Bounty.remove({
    _id: req.params.id
  }, function(err, bounty){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

// ------------------------------------------

// SERVER
app.listen(process.env.PORT || 8081)
