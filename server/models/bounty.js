var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ------ MONGOOSE DB -------
// This is the only place connection needs to be.
// Right now I am using separate connection for each model
const dbBounty = mongoose.createConnection('mongodb://localhost:27017/bounties');
dbBounty.on("error", console.error.bind(console, "connection error"));
dbBounty.once("open", function(callback) {
  console.log("Connection succeeded")
});


var BountySchema = new Schema({
  title: String,
  description: String,
  difficulty: String,
  subject: String,
  length: Number,
  pay: Number,
});

var Bounty = dbBounty.model("Bounty", BountySchema);
module.exports = Bounty;
