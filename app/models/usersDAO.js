class userDAO {
    
    constructor(app, conn) {
        this._app = app;
        this._conn = conn;
    }

}

module.exports = () => {
    return userDAO;
}