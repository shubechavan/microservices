const mongoose = require('mongoose');

function connect() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ User service connected to MongoDB');
    })
    .catch((err) => {
      console.error('❌ MongoDB connection failed:', err.message);
    });
}

module.exports = connect;
