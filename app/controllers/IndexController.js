class IndexController {

    constructor(app) {
        this._app = app
    }

    chat (req, res) {
        if (typeof req.session.email === 'undefined') {
            var data = {}
            var page = 'login'
            if (req.method === 'POST') {
                data = req.body
                page = 'dados'
                const conn = this._app.config.dbConnection
                var userDAO = new this._app.models.usersDAO(this._app, conn)
                userDAO.testLogin(req.body.mail, req.body.password)
            }
            res.render('index', { page: page, data: data})
        }
    }

}

module.exports = () => {
    return IndexController
}