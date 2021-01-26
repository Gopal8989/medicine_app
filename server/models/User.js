const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
   date_of: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  otp: {
    type: Number,
    required: true
  },
  status:{
    type: Number,
    required: true 
  },
  //  name: String,
  // desc: String,
  // img:
  // {
  //     data: Buffer,
  //     contentType: String
  // },
  // filename:{
  //   type: String,
  //   required: true 
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users',UserSchema);
