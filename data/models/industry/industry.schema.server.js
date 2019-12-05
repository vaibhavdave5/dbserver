const mongoose = require('mongoose');

const industrySchema = mongoose.Schema({
    name: String,
    description: String,
}, {collection: 'industry'} );

module.exports = industrySchema;
