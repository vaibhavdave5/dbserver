const datasetDao = require('../data/daos/dataset.dao.server');

module.exports = app => {
    createdataset = (req, res) => {
        datasetDao.createdataset(req.body).then((x) => {
            res.send(JSON.stringify("{res:success}"))
        })
    };

    finddatasetById = (req, res) =>
        datasetDao.finddatasetById(req.params['datasetId']).then(response => res.send(response));

    findAlldatasets = (req, res) =>
        datasetDao.findAlldatasets().then(response => res.send(response));

    findDataSetByFilters = (req, res) => {
        datasetDao.findDataSetByFilters(req.params['company'], req.params['bias']).then(response => res.send(response))
    }

    deletedataset = (req, res) =>
        datasetDao.deletedataset(req.params['datasetId']).then(response => {
            req.session.destroy();
            res.send(200);
        });
    
    findAllbiases = (req, res) =>{
        datasetDao.findAllbiases().then(response => res.send(response.filter(el => el != null)));
    }

    findBiasBasedResults = (req, res) => {
        datasetDao.findBiasBasedResults(req.params['bias']).then(response => res.send(response));
    }
    

    getMlModelCount = (req, res) => {
        datasetDao.getMLModelCount().then(response => res.send(response));
    }

    getCompanyCount = (req, res) => {
        datasetDao.getCompanyCount().then(response => res.send(response));
    }

    getAllIndustry = (req, res) => {
        datasetDao.findAllIndustry().then(response => res.send(response.filter(el => el != null)));
    }


    app.post('/api/dataset/create', createdataset);
    app.delete('/api/dataset/:datasetId', deletedataset);
    app.get('/api/dataset/:datasetId', finddatasetById);
    app.get('/api/biases', findAllbiases);
    app.get('/api/dataset/', findAlldatasets);
    app.get('/api/result/:bias', findBiasBasedResults);
    app.get('/api/filter/:bias/:company', findDataSetByFilters);
    app.get('/api/dataset/stat/mlmodelcount', getMlModelCount);
    app.get('/api/dataset/stat/companycount', getCompanyCount);
    app.get('/api/industry', getAllIndustry);

};
