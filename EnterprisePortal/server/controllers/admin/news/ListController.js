const pool = require('../../../config/db.config')

const ListController = {
    //获取数据
    getList(req, res) {
        pool.getConnection(function (err, connection) {
            var $sql = 'select * from news'
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
        console.log(req.params.num)
        const deleteNum = req.params.num
        pool.getConnection(function (err, connection) {
            var $sql = 'delete from news where num=?'
            connection.query($sql, [deleteNum], function (err, result) {
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

    //编辑(修改)新闻页面单项数据
    getSingleList(req, res) {
        //console.log(req.params.num)
        const singleNum = req.params.num
        pool.getConnection(function (err, connection) {
            var $sql = 'select * from news where num=?'
            connection.query($sql, [singleNum], function (err, result) {
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
        //console.log(req.params.num)
        //console.log(req.body)
        //console.log(req.file)
        const uploadNum = req.params.num
        const { title, content, category } = req.body
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        editTime = new Date()


        if (req.file) {
            pool.getConnection(function (err, connection) {
                var $sql = 'update news set title=?,content=?,category=?,cover=?,editTime=? where num=?'
                connection.query($sql, [title, content, category, cover, editTime, uploadNum], function (err, result) {
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
                var $sql = 'update news set title=?,content=?,category=?,editTime=? where num=?'
                connection.query($sql, [title, content, category, editTime, uploadNum], function (err, result) {
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