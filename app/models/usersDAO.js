class userDAO {
    
    constructor(app, conn) {
        this._app = app;
        this._conn = conn;
    }

    testLogin (email, password) {
        var res = this._comn.query(
            "select * from users where email = '" + email + "' and password = '" + password,
            (err, result) => {
                console.log(result);
            }
        )
    }

}

module.exports = () => {
    return userDAO;
}