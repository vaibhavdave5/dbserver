const mongoose = require('mongoose');
const datasetSchema = require('./dataset.schema.server');
module.exports = mongoose.model('DatasetModel', datasetSchema);
