const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define model
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});

// create the model class
const ModelClass = mongoose.model('user', userSchema );

module.exports = ModelClass;
