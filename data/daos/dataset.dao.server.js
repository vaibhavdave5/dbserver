const datasetModel = require('../models/dataset/dataset.model.server');

createdataset = dataset =>
    datasetModel.create(dataset);

finddatasetById = datasetId =>
    datasetModel.findById(datasetId);

deletedataset = datasetId =>
    datasetModel.deleteOne({_id:datasetId});

findAllbiases = () =>
    datasetModel.distinct('type_of_bias');

findAllIndustry = () =>
    datasetModel.distinct('industry');

findAlldatasets = () => 
    datasetModel.find();

findBiasBasedResults = (bias) =>
    datasetModel.find({'type_of_bias': bias},{sort:{time_frame:-1}});

findDataSetByFilters = (company, bias) =>{
   if(company === "All"){
       company = ''
   }
   if(bias === "All"){
       bias = ''
   }
   return datasetModel.find({$and: [company?{'company':new RegExp(company, 'i')}:{}, bias?{'type_of_bias':bias}:{}]});
}
    
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
    findAllbiases,
    findBiasBasedResults,
    findDataSetByFilters,
    getMLModelCount,
    getCompanyCount,
    findAllIndustry
};
