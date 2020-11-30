const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  bloodType: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  preexistingConditions: {
    type: Array,
  },
  symptoms: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);