const mongoose = require('mongoose');
const biasSchema = require('./bias.schema.server');
module.exports = mongoose.model('BiasModel', biasSchema);
