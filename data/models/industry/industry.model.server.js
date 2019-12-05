const mongoose = require('mongoose');
const industrySchema = require('./industry.schema.server');
module.exports = mongoose.model('IndustryModel', industrySchema);
