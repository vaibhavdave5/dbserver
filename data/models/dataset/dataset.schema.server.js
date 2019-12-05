const mongoose = require('mongoose'), Schema = mongoose.Schema;

const datasetSchema = mongoose.Schema({
    time_frame: String,
    email: String,
    company: String,
    industry: [{type: Schema.Types.ObjectId, ref: 'IndustryModel'}],
    system_purpose: String,
    type_of_bias: [{type: Schema.Types.ObjectId, ref: 'BiasModel'}],
    impact: String,
    link: String,
    ml_model: String
}, {collection: 'dataset'} );

module.exports = datasetSchema;
