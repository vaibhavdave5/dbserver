const datasetModel = require('../models/dataset/dataset.model.server');

createdataset = dataset =>
    datasetModel.create(dataset);

finddatasetById = datasetId =>
    datasetModel.findById(datasetId);

deletedataset = datasetId =>
    datasetModel.deleteOne({_id:datasetId});

findAllbiases = () =>
    datasetModel.find({sort:{year:-1}}).distinct('type_of_bias');

findAlldatasets = () => 
    datasetModel.find();

findBiasBasedResults = (bias) =>
    datasetModel.find({'type_of_bias': bias},{sort:{year:-1}});

findDataSetByFilters = (company, bias) =>{
   if(company === "All"){
       company = ''
   }
   if(bias === "All"){
       bias = ''
   }
   return datasetModel.find({$and: [company?{'company':new RegExp(company, 'i')}:{}, bias?{'type_of_bias':bias}:{}]});
}

module.exports = {
    createdataset,
    finddatasetById,
    deletedataset,
    findAlldatasets,
    findAllbiases,
    findBiasBasedResults,
    findDataSetByFilters
};
