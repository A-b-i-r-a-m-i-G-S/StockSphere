const {Schema} = require("mongoose");

const UserSchema = new Schema({
    email : String,
    username : String,
    password : String
});

module.exports = {UserSchema};