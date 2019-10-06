const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const StudentsSchema = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String,
  },
  age:{
    type: String,
  },
  cgpa:{
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

module.exports = Students = mongoose.model('students', StudentsSchema);
