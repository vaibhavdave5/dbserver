const datasetDao = require('../data/daos/dataset.dao.server');
const biasDao = require('../data/daos/bias.dao.server');

module.exports = app => {

    getIncidentsReportedPerYearByBias = (req, res) => {
        let datasetList = [];
        let currentYear = new Date(Date.now()).getFullYear();
        for(let i=0;i<10;i++) {
            const obj = {
                'Year': currentYear,
                'CountByBias': []
            };
            datasetList.push(obj);
            currentYear--;
        }

        biasDao.getAllBias()
            .then(biases => {
                biases.forEach(bias => {

                        datasetList.map(record => {
                            let obj = {
                                'Bias': bias.type,
                                'Count': 0
                            };
                                record.CountByBias.push(obj);
                        });
                });
            })
            .then(() => datasetDao.findAlldatasets())
            .then(dbRecords => {
                    dbRecords.forEach(db => {
                        console.log(db);
                        console.log(db.bias[0].type);
                        datasetList
                            .filter(record => record.Year == new Date(db.time_frame).getFullYear())
                            .map(record => {
                                console.log(record);
                                record.CountByBias
                                .filter(biasType => biasType.Bias == db.bias[0].type).map(type => type.Count++)});
                    });
            })
            .then(() => res.send(datasetList));

    }

    app.get('/api/charts/incidentreportedperyearbybias', getIncidentsReportedPerYearByBias);
};
