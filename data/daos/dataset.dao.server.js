const datasetModel = require('../models/dataset/dataset.model.server');

createdataset = dataset =>
    datasetModel.create(dataset);

finddatasetById = datasetId =>
    datasetModel.findById(datasetId);

deletedataset = datasetId =>
    datasetModel.deleteOne({_id:datasetId});


findAlldatasets = () => 
    datasetModel.find().populate('industry bias');

findBiasBasedResults = (bias) =>
    datasetModel.find({'bias': bias});


module.exports = {
    createdataset,
    finddatasetById,
    deletedataset,
    findAlldatasets,
    findBiasBasedResults
};
