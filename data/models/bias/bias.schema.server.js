const mongoose = require('mongoose');

const biasSchema = mongoose.Schema({
    type: String,
    description: String,
}, {collection: 'bias'} );

module.exports = biasSchema;
