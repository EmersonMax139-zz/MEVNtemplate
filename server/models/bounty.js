var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BountySchema = new Schema({
  title: String,
  description: String,
  difficulty: String,
  subject: String,
  length: Number,
  pay: Number,
});

var Bounty = mongoose.model("Bounty", BountySchema);
module.exports = Bounty;
