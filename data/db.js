module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'DB';
    var connectionString = 'mongodb+srv://vd1:vd1@cluster0-mismh.mongodb.net/test?retryWrites=true&w=majority';
    //var   connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
};
