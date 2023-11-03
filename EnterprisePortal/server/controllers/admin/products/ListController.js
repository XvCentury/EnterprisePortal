const pool = require('../../../config/db.config')

const ListController = {
    getList(req, res) {
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
    //删除数据
    deleteList(req, res) {
        console.log(req.params.pid)
        const deletePid = req.params.pid
        pool.getConnection(function (err, connection) {
            var $sql = 'delete from products where pid=?'
            connection.query($sql, [deletePid], function (err, result) {
                if (err) {
                    return console.log(err.message);
                } else {
                    res.send({
                        code: '200',
                    })
                }
                connection.release()
            })
        })
    },
    //编辑(修改)产品页面单项数据
    getSingleList(req, res) {
        //console.log(req.params.num)
        const singlePid = req.params.pid
        pool.getConnection(function (err, connection) {
            var $sql = 'select * from products where pid=?'
            connection.query($sql, [singlePid], function (err, result) {
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
     //更新数据
     upload(req, res) {
        // console.log(req.params.num)
        // console.log(req.body)
        // console.log(req.file)
        const uploadPid = req.params.pid
        const { title,introduction,detail } = req.body
        const cover = req.file ? `/productsuploads/${req.file.filename}` : ""
        editTime = new Date()


        if (req.file) {
            pool.getConnection(function (err, connection) {
                var $sql = 'update products set title=?,introduction=?,detail=?,cover=?,editTime=? where pid=?'
                connection.query($sql, [title,introduction,detail, cover, editTime, uploadPid], function (err, result) {
                    if (err) {
                        return console.log(err.message);
                    } else {
                        res.send({
                            code: '200',
                        })
                    }
                    connection.release()
                })
            })
        } else {
            pool.getConnection(function (err, connection) {
                var $sql = 'update products set title=?,introduction=?,detail=?,editTime=? where pid=?'
                connection.query($sql, [title,introduction,detail, editTime, uploadPid], function (err, result) {
                    if (err) {
                        return console.log(err.message);
                    } else {
                        res.send({
                            code: '200',
                        })
                    }
                    connection.release()
                })
            })
        }
    }
}


module.exports = ListController