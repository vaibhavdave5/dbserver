var express = require('express');
var app = express();
const mongoose = require('mongoose');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

var bodyParser = require('body-parser');

require('./data/db')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userService = require('./services/user.service.server.js');
userService(app);

const datasetService = require('./services/dataset.service.server.js');
datasetService(app);

const biasService = require('./services/bias.service.server');
biasService(app);

const industryService = require('./services/industry.service.server');
industryService(app);

const chartService = require('./services/charts.service.server');
chartService(app);

// const attendeeService = require('./services/attendee.service.server.js');
// attendeeService(app);

// const organizerService = require('./services/organizer.service.server.js');
// organizerService(app);

// const eventbriteService = require('./services/eventbrite.service.server');
// eventbriteService(app);

// const eventService = require('./services/event.service.server');
// eventService(app);

app.listen(process.env.PORT||5000);
