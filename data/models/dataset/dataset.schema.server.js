const mongoose = require('mongoose');

const datasetSchema = mongoose.Schema({
    time_frame: String,
    email: String,
    company: String,
    industry: String,
    system_purpose: String,
    type_of_bias: String,
    impact: String,
    link: String,
    ml_model: String
}, {collection: 'dataset'} );

module.exports = datasetSchema;
