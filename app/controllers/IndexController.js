class IndexController {

    constructor(app) {
        this._app = app
    }

    chat (req, res) {
        if (typeof req.session.email === 'undefined') {
            var data = {}
            var errors = []
            var page = 'login'
            if (req.method === 'POST') {
                data = req.body
                page = 'dados'

                // Inputs validation
                req.assert('mail', 'O campo email não pode ser vazio').trim().notEmpty()
                req.assert('mail', 'O campo email deve conter um email válido').trim().isEmail()
                req.assert('password', 'O campo senha não pode ser vazio').notEmpty()
                errors = req.validationErrors();
                if (errors.length > 0 ) page = "login"

                const conn = this._app.config.dbConnection
                var userDAO = new this._app.models.UsersDAO(this._app, conn)
                userDAO.testLogin(req.body.mail, req.body.password)
            }
            res.render('index', { page: page, data: data, errors: errors })
        }
    }

}   

module.exports = () => {
    return IndexController
}