var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ------ MONGOOSE DB -------
// THIS IS WHERE ISSUE IS CURRENTLY --
// Need to get separate User schema/separate database for users
// var mongoose = require('mongoose');
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
