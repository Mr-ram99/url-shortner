const mongoose = require('mongoose');

const connectMongoDB = (url) => {
  mongoose.connect(url)
    .then(() => {
      console.log('mongoDB connected. Database: url-shortner');
    })
    .catch((err) => {
      console.log('mongoDB error:', err);
    })
}

module.exports = { connectMongoDB }