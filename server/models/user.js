var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ------ MONGOOSE DB -------
// This is the only place connection needs to be.
// Right now I am using separate connection for each model
const dbUser = mongoose.createConnection('mongodb://localhost:27017/users');
dbUser.on("error", console.error.bind(console, "connection error"));
dbUser.once("open", function(callback) {
  console.log("Connection succeeded")
});


var UserSchema = new Schema({
  username: String,
  password: String,
})

var User = dbUser.model("User", UserSchema);
module.exports = User;
