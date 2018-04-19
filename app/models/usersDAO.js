class userDAO {
    
    constructor(app, conn) {
        this._app = app;
        this._conn = conn;
    }

    testLogin (email, password) {
        var SQL = "select * from users where mail = '" + email + "' and password = '" + password + "'";
        var res = this._conn.execute(
            SQL,
            (err, result) => {
                // return result[0].name;
                console.log(result[0].name);
            }
        )
    }

}

module.exports = () => {
    return userDAO;
}