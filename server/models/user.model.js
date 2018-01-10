const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  fb_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date_signed_up: {
    type: Date,
    required: true,
    default: Date.now
  },
  profile_photo: {
    type: String,
    required: false
  },
  fb_url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', userSchema);
