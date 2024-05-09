const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  enroll: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
