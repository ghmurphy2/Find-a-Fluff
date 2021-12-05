const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://localhost/sortamyface', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindandModify: false,
    });

module.exports = mongoose.connection;