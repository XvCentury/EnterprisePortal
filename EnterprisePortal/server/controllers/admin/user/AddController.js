
const pool = require('../../../config/db.config')

const AddController = {
    add(req, res){
        
        //console.log(req.body, req.file)
        const { username,introduction,gender,password,role } = req.body
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""
        

        //如果更改了头像
         if (req.file) {
            pool.getConnection(function (err, connection) {
                var $sql = "insert into users(username,introduction,gender,avatar,password,role) values (?,?,?,?,?,?)";
                connection.query($sql, [username, introduction, Number(gender), avatar, password, role], function (err, result) {
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
                var $sql = "insert into users(username,introduction,gender,avatar,password,role) values (?,?,?,?,?,?)";
                connection.query($sql, [username, introduction, Number(gender), avatar, password, role], function (err, result) {
                    if (err) return console.log(err.message);
                    if (result.affectedRows == 1) {
                        res.send({
                            code: '200',
                        })
                    }                  
                    connection.release();// 释放连接
                });
                
            })
        }
    }
}

module.exports = AddController 