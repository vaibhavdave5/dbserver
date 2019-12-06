const biasDao = require('../data/daos/bias.dao.server');

module.exports = app => {
    createBias = (req, res) => {

        biasDao.createBias(req.body).then(response => {
            res.send(JSON.stringify("{res:success}"))
        });
    };

    findAllBias = (req, res) =>
        biasDao.getAllBias().then(response => res.send(response));

    findBiasById = (req, res) =>
        biasDao.getBiasById(req.params['biasId']).then(response => res.send(response));


    app.post('/api/bias', createBias);
    app.get('/api/bias', findAllBias);
    app.get('/api/bias/:biasId', findBiasById);
};
