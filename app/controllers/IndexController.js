class IndexController {

    constructor(app) {
        this._app = app
    }

    chat (req, res) {
        if (typeof req.session.mail === 'undefined') {
            var data = {}
            var errors = []
            var page = 'login'
            if (req.method === 'POST') {
                data = req.body

                // Inputs validation
                req.assert('mail', 'O campo email não pode ser vazio').trim().notEmpty()
                req.assert('mail', 'O campo email deve conter um email válido').trim().isEmail()
                req.assert('password', 'O campo senha não pode ser vazio').notEmpty()
                errors = req.validationErrors();
                if (errors.length > 0 ) page = "login"

                const conn = this._app.config.dbConnection
                var userDAO = new this._app.models.UsersDAO(this._app, conn)
                userDAO.login(req.body.mail, req.body.password).then(
                    (user) => { 
                        console.log(user)
                        if (!user) {
                            res.render('index', { page: "login", data: data, errors: errors })
                        } else {
                            req.session.idUser = user.iduser
                            req.session.name = user.name
                            req.session.mail = user.mail
                            res.render('index', { page: "chat", data: data, errors: errors })
                        }
                    }
                )
            } else {
                res.render('index', { page: "login", data: data, errors: errors })
            }
        } else {
            var data = { idUser: req.session.idUser, name: req.session.name, mail: req.session.mail }
            res.render('index', { page: "chat", data: data, errors: [] })
        }
    }

}   

module.exports = () => {
    return IndexController
}