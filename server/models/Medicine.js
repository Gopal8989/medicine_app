const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MedicineSchema = new Schema ({
  medicine_name: {
    type: String,
    required: true
  },
  quntiy: {
    type: Number,
    required: true
  },
  medicine_time: {
    type: String,
    required: true
  },

  
  medicine_details: {
    type: String,
    required: true
  },
  after_before_eating:{
    type: String,
    required: true
 },
//  file:{
//   type: String,
//   required: true
// },
avabile_at:{
  type: String,
  required: true
},
price:{
  type: Number,
  required: true
},
drug:{
  type: String,
  required: true
},
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports =  Medicine = mongoose.model('medicines',MedicineSchema);
