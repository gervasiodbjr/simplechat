class UserDAO {
    
    constructor(app, conn) {
        this._app = app
        this._conn = conn
    }

    testLogin (email, password) {
        var dbHelper = new this._app.models.DBHelper(this._conn)
        var SQL = "select * from users where mail = '" + email + "' and password = '" + password + "'"
        dbHelper.query(SQL).then(
            (res) => {
                if (res.length === 1) {
                    console.log(res[0])
                } else {
                    console.log('Login Fail')
                }
            }
        )
    }

    query (conn, SQL) {
        return new Promise(
            (resolve, reject) => {
                conn.query(SQL , (err, rows) => {
                    if (!err)
                        resolve(rows)
                    else
                        reject(err)
                })
            }
        )
    }

}

module.exports = () => {
    return UserDAO
}