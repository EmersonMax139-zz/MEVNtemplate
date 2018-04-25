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

// ---- MONGOOSE MODULE(S) -------
var Post = require("../models/post");

// ROUTES
//  --- ES6 Syntax -- (req, res) is callback function)
app.get('/bounties', (req,res) => {
  res.send(
    [{
      title: "YO WHATS GOOD",
      description: "How are you, Im wondering"
    }]
  )
})

// --------------------------------------------




app.listen(process.env.PORT || 8081)
