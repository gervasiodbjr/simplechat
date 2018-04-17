const index = (app) => {

    app.get('/', (req, res) => {
        var indexController = new app.controllers.IndexController(app);
        indexController.formLogin(req,res);
    });
    
    app.post('/', (req, res) => {
        var indexController = new app.controllers.IndexController(app);
        indexController.getSession(req,res);
    });
    
}

module.exports = index;