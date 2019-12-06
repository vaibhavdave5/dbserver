const industryModel = require('../models/industry/industry.model.server');

createIndustry = industry =>
    industryModel.create(industry);

getAllIndustry = () =>
    industryModel.find();

getIndustryById = industryId =>
    industryModel.findById(industryId);

module.exports = {
    createIndustry,
    getAllIndustry,
    getIndustryById
};
