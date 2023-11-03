const pool = require('../../../config/db.config')

const ListController = {
    //获取数据
    getList(req, res) {
        pool.getConnection(function (err, connection) {
            var $sql = 'select * from users'
            connection.query($sql, function (err, result) {
                //console.log(result)
                if (err) {
                    return console.log(err.message);
                }else{
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
    deleteList(req,res){
        console.log(req.params.id)
        const deleteId = req.params.id
        pool.getConnection(function(err,connection){
            var $sql = 'delete from users where id=?'
            connection.query($sql,[deleteId],function(err,result){
                if (err) {
                    return console.log(err.message);
                }else{
                    res.send({
                        code: '200',
                    })
                }
                connection.release()
            })
        })
    },
    //更新数据
    putList(req,res){
        //console.log(req.params.id)
        console.log(req.body)
        const putId = req.params.id
        const { id,username,password, introduction, role } = req.body
        pool.getConnection(function(err,connection){
            var $sql = 'update users set username=?,password=?,introduction=?,role=? where id=?'
            connection.query($sql,[username,password,introduction,role,id],function(err,result){
                if (err) {
                    return console.log(err.message);
                }else{
                    res.send({
                        code: '200',
                    })
                }
                connection.release()
            })
        })
    }
}

module.exports = ListController