const mongoose = require('mongoose'), Schema = mongoose.Schema;

const datasetSchema = mongoose.Schema({
    year: String,
    email: String,
    company: String,
    industry: String,
    system_purpose: String,
    bias: String,
    impact: String,
    link: String,
    ml_model: String
}, {collection: 'dataset'} );

module.exports = datasetSchema;
