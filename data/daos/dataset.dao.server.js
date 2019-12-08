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

getMLModelCount = () =>
    datasetModel.aggregate([
        {
            $group: {
                _id: '$ml_model',
                count: {$sum: 1}
            }
        },
        {
            $sort: {'count': -1}
        }
    ]).limit(5);

getCompanyCount = () =>
    datasetModel.aggregate([
        {
            $group: {
                _id: '$company',
                count: {$sum: 1}
            }
        },
        {
            $sort: {'count': -1}
        }
    ]).limit(5);


module.exports = {
    createdataset,
    finddatasetById,
    deletedataset,
    findAlldatasets,
    findBiasBasedResults,
    getMLModelCount,
    getCompanyCount
};
