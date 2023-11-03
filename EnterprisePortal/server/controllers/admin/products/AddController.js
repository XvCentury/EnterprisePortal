
const pool = require('../../../config/db.config')

const AddController = {
    add(req,res){
        //console.log(req.body,req.file)
        const { title,introduction,detail } = req.body
        const cover =`/productsuploads/${req.file.filename}`
        editTime = new Date()

        pool.getConnection(function (err, connection) {
            var $sql = 'insert into products(title,introduction,detail,cover,editTime) values (?,?,?,?,?)'
            connection.query($sql,[title,introduction,detail,cover,editTime],function(err,result){
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