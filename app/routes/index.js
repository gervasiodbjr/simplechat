const index = (app) => {

    app.get('/', (req, res) => {
        var indexController = new app.controllers.IndexController(app);
        indexController.chat(req,res);
    });
    
    app.post('/', (req, res) => {

        req.assert('email', 'O campo email não pode ser vazio').trim().isEmpty();
        req.assert('email', 'O campo email deve conter um email válido').trim().isEmail();
        req.assert('password', 'O campo senha não pode ser vazio').isEmpty();
        

        var indexController = new app.controllers.IndexController(app);
        indexController.chat(req,res);
    });
    
}

module.exports = index;