

const pool = require('../../../config/db.config')
const JWT = require('../../../util/JWT.js')

const UserController = {

    login(req, res, next) {
        // 获取请求字段 
        //console.log('post')
        var username = req.body.username;//获取前台请求的参数
        var password = req.body.password;


        //console.log(req.body.username)


        // 启用连接池查询
        pool.getConnection(function (err, connection) {
            //先判断该账号是否存在
            var $sql = "select * from users where username=?";
            connection.query($sql, [username], function (err, result) {
                var resultJson = result;
                //console.log(resultJson);
                if (resultJson.length === 0) {
                    result = {
                        code: 300,
                        msg: '该账号不存在'
                    };
                    res.json(result);
                    connection.release();
                } else {  //账号存在，可以登录，进行密码判断
                    var $sql1 = "select * from users where username=?";
                    connection.query($sql1, [username], function (err, result) {
                        var temp = result[0].password;  //取得数据库查询字段值
                        console.log(result)
                        if (temp == password) {
                            result = {

                                code: 200,
                                msg: '密码正确',
                                data: {
                                    id:result[0].id,
                                    username: result[0].username,
                                    gender: result[0].gender ? result[0].gender : 0,
                                    introduction: result[0].introduction,
                                    avatar: result[0].avatar,
                                    role: result[0].role,
                                    //role: result[0].role
                                }
                            };
                            // req.session.name=req.body
                            // req.session.islogin=true
                            //向前端传入token
                            const token = JWT.generate({

                                //虽然只有一个id和username，但是只有带上索引，在前端向后端返回token的时候，payload才能含有id和username
                                //这里不能用id: result[0].id,因为result已经不是查询结果了，值被覆盖了
                                id: resultJson[0].id,
                                username: resultJson[0].username,
                            }, '1d')
                            //1d就是一天
                            //console.log(token)
                            
                            res.header('Authorization', token)
                            //返回具体信息给前端来做页面

                        } else {
                            result = {
                                code: 400,
                                msg: '密码错误',
                            };
                            // req.session.islogin=false
                        }
                        res.json(result); // 以json形式，把操作结果返回给前台页面
                        connection.release();// 释放连接
                        console.log('找到了')
                    });
                }
            });
        });
    }



}

module.exports = UserController