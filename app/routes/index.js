const index = (app) => {

    app.get('/', (req, res) => {
        var indexController = new app.controllers.IndexController(app)
        indexController.chat(req,res)
    })
    
    app.post('/', (req, res) => {
        var indexController = new app.controllers.IndexController(app)
        indexController.chat(req,res)
    })
    
}

module.exports = index