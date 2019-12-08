const datasetDao = require('../data/daos/dataset.dao.server');

getDataSetList = (datasetList) => {
    let currentYear = new Date(Date.now()).getFullYear();
    for(let i=0;i<10;i++) {
        const obj = {
            'Year': currentYear,
            'CountByBias': [],
            'CountByIndustry': []
        };
        datasetList.push(obj);
        currentYear--;
    }
};

module.exports = app => {

    getIncidentsReportedPerYearByBias = (req, res) => {
        let datasetList = [];
        getDataSetList(datasetList);

        datasetDao.findAllbiases()
            .then(biases => {
                biases.forEach(bias => {

                        datasetList.map(record => {
                            let obj = {
                                'Bias': bias,
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
                        datasetList
                            .filter(record => record.Year == new Date(db.time_frame).getFullYear())
                            .map(record => {
                                console.log(record);
                                record.CountByBias
                                .filter(biasType => biasType.Bias == db.type_of_bias).map(type => type.Count++)});
                    });
            })
            .then(() => res.send(datasetList));

    };

    getIncidentsReportedPerYearByIndustry = (req, res) => {
        let datasetList = [];
        getDataSetList(datasetList);
        datasetDao.findAllIndustry()
            .then(industries => {
                industries.forEach(industry => {

                    datasetList.map(record => {
                        let obj = {
                            'Industry': industry,
                            'Count': 0
                        };
                        record.CountByIndustry.push(obj);
                    });
                });
            })
            .then(() => datasetDao.findAlldatasets())
            .then(dbRecords => {
                dbRecords.forEach(db => {
                    datasetList
                        .filter(record => record.Year == new Date(db.time_frame).getFullYear())
                        .map(record => {
                            record.CountByIndustry
                                .filter(industryType => industryType.Industry == db.industry)
                                .map(type => type.Count++)});
                });
            })
            .then(() => res.send(datasetList));

    };

    app.get('/api/charts/incidentreportedperyearbybias', getIncidentsReportedPerYearByBias);
    app.get('/api/charts/incidentreportedperyearbyindustry', getIncidentsReportedPerYearByIndustry);
};

