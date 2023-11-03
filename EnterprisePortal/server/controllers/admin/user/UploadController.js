/*拿到前端数据，处理加工，进行调用数据层（Services)
返回数据*/


const pool = require('../../../config/db.config')

const UploadController = {

    upload(req, res,next){
        //console.log(req.body, req.file)
        const { id,username, introduction, gender } = req.body
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""
        //从token中拿到username，才能将数据更改到指定用户上
        // const token = req.headers['authorization'].split(' ')[1]
        // var payload = JWT.verify(token)

        /* 我这里的payload只在第一次请求的时候含有id值，第二次没有，遂改用post请求中携带的id */

        //修改用户信息

        //如果更改了头像
         if (req.file) {
            pool.getConnection(function (err, connection) {
                var $sql = "update users set username=?,gender=?,introduction=?,avatar=? where id=?";
                connection.query($sql, [username, Number(gender), introduction, avatar, id], function (err, result) {
                    if (err) return console.log(err.message);
                    
                    if (result.affectedRows == 1) {
                        res.send({
                            code: '200',
                            data: {
                                username, introduction,
                                gender: Number(gender),
                                avatar
                            },
                        })
                    }
                    
                    connection.release();// 释放连接
                });
                
            })
        //没更改头像
        } else {
            pool.getConnection(function (err, connection) {
                var $sql = "update users set username=?,gender=?,introduction=? where id=?";
                connection.query($sql, [username, Number(gender), introduction, id], function (err, result) {
                    if (err) return console.log(err.message);
                    if (result.affectedRows == 1) {
                        res.send({
                            code: '200',
                            data: {
                                username, introduction,
                                gender: Number(gender),
                            },
                        })
                    }
                    
                    connection.release();// 释放连接
                });
                
            })
        }
        
    }
}
module.exports = UploadController