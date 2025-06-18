const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('✅ MongoDB connected');
    }).catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });
};

module.exports = connect;
