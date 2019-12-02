const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    about: String
}, {collection: 'user'} );

module.exports = userSchema;
