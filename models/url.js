const mongoose = require('mongoose');

const URLSchema = mongoose.Schema({
  shortID: {
    type: String,
    required: true,
    unique: true
  },
  redirectURL: {
    type: String,
    required: true
  },
  visitHistory: [
    {
      timestamp: {
        type: Number
      }
    }
  ]
},
  { timestamps: true }
);

const URL = mongoose.model('url', URLSchema);

module.exports = URL;