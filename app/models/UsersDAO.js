class UserDAO {
    
    constructor(app, conn) {
        this._app = app
        this._conn = conn
    }

    login (mail, password) {
        var user = {}
        var dbHelper = new this._app.models.DBHelper(this._conn)
        var SQL = "select * from users where mail = '" + mail + "' and password = '" + password + "'"

        return new Promise (
            (resolve, reject) => {
                dbHelper.query(SQL).then(
                    (res) => {
                        if (res.length === 1) {
                            resolve(res[0])
                        } else {
                            resolv(false)
                        }
                    }
                )
            }
        )
    }
}

module.exports = () => {
    return UserDAO
}