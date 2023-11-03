const pool = require('../../../config/db.config')

const ListController = {
    //获取数据
    
    getList(req, res) {
        //console.log(req.body)
        pool.getConnection(function (err, connection) {
            var $sql = 'select * from products'
            connection.query($sql, function (err, result) {
                //console.log(result)
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