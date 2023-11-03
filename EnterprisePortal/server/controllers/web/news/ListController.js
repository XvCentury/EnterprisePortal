const pool = require('../../../config/db.config')

const ListController = {
    //获取数据
    
    getList(req, res) {
        //console.log(req.body)

        pool.getConnection(function (err, connection) {
            var $sql = 'select * from news where isPublish=1 order by editTime DESC'
            connection.query($sql, function (err, result) {
                console.log(result)
                if (err) {
                    return console.log(err.message);
                } else {
                    res.send({
                        code: '200',
                        data: result
                    })
                }
                connection.release()
            })
        })
    },

    getNew(req, res) {
        //console.log(req.params.num)
        const SingleNum = req.params.num

        pool.getConnection(function (err, connection) {
            var $sql = 'select * from news where isPublish=1 and num=?'
            connection.query($sql,[SingleNum], function (err, result) {
                console.log(result)
                if (err) {
                    return console.log(err.message);
                } else {
                    res.send({
                        code: '200',
                        data: result
                    })
                }
                connection.release()
            })
        })
    },
    getNew4(req, res) {
        //console.log(req.query.limit)
        const limit = req.params.limit

        pool.getConnection(function (err, connection) {
            var $sql = 'select * from news where isPublish=1 order by editTime DESC limit 1,4'
            connection.query($sql, function (err, result) {
                console.log(result)
                if (err) {
                    return console.log(err.message);
                } else {
                    res.send({
                        code: '200',
                        data: result
                    })
                }
                connection.release()
            })
        })
    },
}

module.exports = ListController