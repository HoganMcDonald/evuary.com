const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  fb_id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date_posted: {
    type: Date,
    required: true,
    default: Date.now
  },
  name: {
    type: String,
    required: true
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

module.exports = mongoose.model('comments', commentSchema);
