class IndexController {

    constructor(app) {
        this._app = app;
    }

    chat (req, res) {
        if ( ( typeof req.session.email === 'undefined') || (typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined')) {
            res.render('index', { page: 'login', data: {}});
        } else if ( (typeof req.body.email !== 'undefined') && (typeof req.body.password !== 'undefined') ) {
            const conn = this._app.config.dbConnection;
            var userDAO = new this._app.models.usersDAO(this._app, conn);
            userDAO.testLogin(req.body.email, req.body.passwrd);
            res.render('index', { page: 'dados', data: req.body});
        }
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