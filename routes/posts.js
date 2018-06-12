var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// ---- MONGOOSE MODEL(S) -------
var Post = require("../models/post");

// Add new post
router.post('/', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var subject = req.body.subject;

  var new_post = new Post({
    title,
    description,
    subject,
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// // Fetch Bounties (and sort)
router.get('/', (req, res) => {
  Post.find({}, 'title description subject', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Fetch single post
router.get('/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description subject', function (error, post) {
    if (error) { console.error(error); }
    res.send(bounty)
  })
})

// Update a post
router.put('/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description title description difficulty subject length pay', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.description = req.body.description
    post.subject = req.body.subject
    post.save(function (error) {
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
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

module.exports = router;
