/*此文件夹放
引用创建的数据库模型，进行数据的增删改查
 */
const pool = require('../../config/db.config')


const UserService = {
    // login: async (username, password) => {
        //    return UserModel.find({
        //     username,
        //     password
        // })
    login: ()=>{

        var username = req.body.name;//获取前台请求的参数
        var password = req.body.pass

        pool.getConnection(function (err, connection) {
            //先判断该账号是否存在
            var $sql = "select * from users where username=?";
            connection.query($sql, [username], function (err, result) {
              var resultJson = result;
              console.log(resultJson.length);
              if (resultJson.length === 0) {
                result = {
                  code: 300,
                  msg: '该账号不存在'
                };
                res.json(result);
                connection.release();
              } else {  //账号存在，可以登录，进行密码判断
                var $sql1 = "select passwoed from users where username=?";
                connection.query($sql1, [username], function (err, result) {
                  var temp = result[0].PASSWORD;  //取得数据库查询字段值
                  console.log(temp);
                  if (temp == password) {
                    result = {
                      code: 200,
                      msg: '密码正确'
                    };
                    req.session.name=req.body
                    req.session.islogin=true
                  } else {
                    result = {
                      code: 400,
                      msg: '密码错误'
                    };
                    req.session.islogin=false
                  }
                  res.json(result); // 以json形式，把操作结果返回给前台页面
                  connection.release();// 释放连接
                  console.log('找到了')
                })
              }
            })
          })

        }

    
}

module.exports = UserService