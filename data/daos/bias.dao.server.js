const biasModel = require('../models/bias/bias.model.server');

createBias = bias =>
    biasModel.create(bias);

getAllBias = () =>
    biasModel.find();

getBiasById = biasId =>
    biasModel.findById(biasId);

module.exports = {
    createBias,
    getAllBias,
    getBiasById
};
