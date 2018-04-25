// MAIN FILE
// THIS IS RUN WITH npm start
//
// express() controls routes and and the server itself

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
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

// ROUTES
//  --- ES6 Syntax -- (req, res) is callback function)
// app.get('/bounties', (req,res) => {
//   res.send(
//     [{
//       title: "Sup",
//       description: "How are you, Im wondering"
//     },
//     {
//       title: "Other Post",
//       description: "This is another jawn"
//     }
//   ]
//   )
// })

// --------------------------------------------

// Add new bounty
app.post('/bounties', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_bounty = new Bounty({
    title: title,
    description: description
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
  Bounty.find({}, 'title description', function (error, bounties) {
    if (error) { console.error(error); }
    res.send({
      bounties: bounties
    })
  }).sort({_id:-1})
})


app.listen(process.env.PORT || 8081)
