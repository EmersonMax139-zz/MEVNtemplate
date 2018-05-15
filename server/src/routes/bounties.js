var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// ---- MONGOOSE MODEL(S) -------
var Bounty = require("../../models/bounty");

// Add new bounty
router.post('/', (req, res) => {
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
router.get('/', (req, res) => {
  Bounty.find({}, 'title description difficulty subject length pay', function (error, bounties) {
    if (error) { console.error(error); }
    res.send({
      bounties: bounties
    })
  }).sort({_id:-1})
})

// Fetch single post
router.get('/:id', (req, res) => {
  var db = req.db;
  Bounty.findById(req.params.id, 'title description title description difficulty subject length pay', function (error, bounty) {
    if (error) { console.error(error); }
    res.send(bounty)
  })
})

// Update a post
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

module.exports = router;
