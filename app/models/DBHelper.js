class DBHelper {

    constructor(conn) {
        this._conn = conn
    }

    query (SQL) {
        return new Promise(
            (resolve, reject) => {
                this._conn.query(SQL , (err, rows) => {
                    if (!err)
                        resolve(rows);
                    else
                        reject(err);
                })
            }
        )
    }

}

module.exports = () => {
    return DBHelper
}