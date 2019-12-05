const industryDao = require('../data/daos/industry.dao.server');

module.exports = app => {
    createIndustry = (req, res) => {

        industryDao.createIndustry(req.body).then(response => {
            res.send(JSON.stringify("{res:success}"))
        });
    };

    findAllIndustry = (req, res) =>
        industryDao.getAllIndustry().then(response => res.send(response));

    findIndustryById = (req, res) =>
        industryDao.getIndustryById(req.params['industryId']).then(response => res.send(response));


    app.post('/api/industry', createIndustry);
    app.get('/api/industry', findAllIndustry);
    app.get('/api/industry/:industryId', findIndustryById);
};
