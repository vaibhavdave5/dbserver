const userDao = require('../data/daos/dataset.dao.server');

module.exports = app => {
    createdataset = (req, res) => {
        userDao.findUserByEmail(req.body.email).then((xyz) => {
            if (xyz === null) {
                userDao.createUser(req.body).then((x) => {
                    res.send(JSON.stringify("{res:success}"))
                })
            } else {
                res.send(JSON.stringify("duplicate"))
            }
        })
    };

    loginUser = (req, res) => {
        userDao.loginUser(req.body).then(response => {
            if (response === "Not found") {
                res.send(response);
            } else {
                req.session['currUser'] = response;
                res.send(response);
            }
        });
    };

    logout = (req, res) => {
        req.session.destroy();
        res.send(200);
    };

    getLoggedInUser = (req, res) =>
        res.send(req.session['currUser']);

    updateUser = (req, res) => {
        userDao.updateUser(req.params['userId'], req.body).then(response => {
            req.session['currUser'] = req.body;
            res.send(response)
        });
    };

    findUserById = (req, res) =>
        userDao.findUserById(req.params['userId']).then(response => res.send(response));

    findAllUsers = (req, res) =>
        userDao.findAllUsers().then(response => res.send(response));

    deleteUser = (req, res) =>
        userDao.deleteUser(req.params['userId']).then(response => {
            req.session.destroy();
            res.send(200);
        });

    app.post('/api/user/login', loginUser);
    app.post('/api/user/register', createUser);
    app.get('/api/user/logout', logout);
    app.get('/api/user/profile', getLoggedInUser);
    app.get('/api/users', findAllUsers);
    app.get('/api/user/:userId', findUserById);
    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);
};
