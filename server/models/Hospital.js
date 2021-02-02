const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HospitalSchema = new Schema ({
    specialist: {
    type: String,
    required: true
  },
  
  hospital_name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
//    date_of: {
//     type: Date,
//     required: true
//   },
  doctor_name: {
    type: String,
    required: true
  },
//   otp: {
//     type: Number,
//     required: true
//   },
  mobile:{
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

module.exports = Hospital = mongoose.model('hospitals',HospitalSchema);
