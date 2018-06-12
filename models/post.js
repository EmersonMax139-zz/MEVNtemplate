const mongoose = require('mongoose')
var Schema = mongoose.Schema;

// Reference to connection in app.js
const db = mongoose.connection;


var PostSchema = new Schema({
  title: String,
  description: String,
  subject: String,
});

var Post = db.model("Post", PostSchema);
module.exports = Post;
