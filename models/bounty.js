const mongoose = require('mongoose')
var Schema = mongoose.Schema;

// Reference to connection in app.js
const db = mongoose.connection;


var BountySchema = new Schema({
  title: String,
  description: String,
  difficulty: String,
  subject: String,
  length: Number,
  pay: Number,
});

var Bounty = db.model("Bounty", BountySchema);
module.exports = Bounty;
