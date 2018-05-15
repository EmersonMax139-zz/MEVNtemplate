var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ------ MONGOOSE DB -------
// THIS IS WHERE ISSUE IS CURRENTLY --
// Need to get separate User schema/separate database for users
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
