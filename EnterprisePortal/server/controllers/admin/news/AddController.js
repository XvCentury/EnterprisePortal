

const pool = require('../../../config/db.config')

const AddController = {
    add(req,res){
        //console.log(req.body,req.file)
        const { title,content,category,isPublish } = req.body
        const cover =`/newsuploads/${req.file.filename}`
        editTime = new Date()

        pool.getConnection(function (err, connection) {
            var $sql = 'insert into news(title,content,category,cover,isPublish,editTime) values (?,?,?,?,?,?)'
            connection.query($sql,[title,content,category,cover,isPublish,editTime],function(err,result){
                if (err) return console.log(err.message);   
                if (result.affectedRows == 1) {
                    res.send({
                        code: '200',
                    })
                }
                connection.release();// 释放连接 
            })
        })
       
    }
}

module.exports = AddController