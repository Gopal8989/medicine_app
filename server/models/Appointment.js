const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AppointmentSchema = new Schema ({
  illness: {
    type: String,
    required: true
  },
  
  hospital: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  datee: {
    type: String,
    required: true
  },
   time: {
    type: String,
    required: true
  },
//   address: {
//     type: String,
//     required: true
//   },
  token_nu: {
    type: Number,
    required: true
  },
  m_number:{
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

module.exports = Appointment = mongoose.model('appointments',AppointmentSchema);
