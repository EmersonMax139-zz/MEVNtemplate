var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BountySchema = new Schema({
  title: String,
  description: String,
});

var Post = mongoose.model("Bounty", BountySchema);
module.exports = Bounty;
