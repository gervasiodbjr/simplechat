class IndexController {

    constructor(app) {
        this._app = app;
    }

    formLogin (req, res) {
        res.render('index', { page: 'login', data: {}});
    }

    getSession (req, res) {
        if ( typeof req.session.email !== 'undefined')
            return req.session;
        const conn = this._app.config.dbConnection;
        var userDAO = new this._app.models.usersDAO(this._app, conn);
        res.render('index', { page: 'dados', data: req.body});
    }
}

module.exports = () => {
    return IndexController;
}