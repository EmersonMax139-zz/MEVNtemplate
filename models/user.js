const mongoose = require('mongoose')
var Schema = mongoose.Schema;

// Reference to connection in app.js
const db = mongoose.connection;


var UserSchema = new Schema({
  username: String,
  password: String,
})

var User = db.model("User", UserSchema);
module.exports = User;
