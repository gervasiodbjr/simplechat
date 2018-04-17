class IndexController {

    constructor(app) {
        this._app = app;
    }

    formLogin (req, res) {
        res.render('index', { page: 'login', data: {}});
    }

    getSession (req, res) {
        res.render('index', { page: 'dados', data: req.body});
    }
}

module.exports = () => {
    return IndexController;
}