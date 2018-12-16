const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/toDoCollection';

mongoose.connect(mongoURI);

module.exports = mongoose;