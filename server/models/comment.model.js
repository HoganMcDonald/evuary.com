const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  name: {
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
  }
});
