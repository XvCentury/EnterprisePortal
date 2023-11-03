//存放数据库链接

// 创建mysql连接
let mysql=require("mysql");
const db_config={
    host:"localhost",
    post:"3306",
    user:"root",
    password:"123456",
    database: 'enterpriseportal', // 数据库名称
}
let pool=mysql.createPool(db_config);


// pool.getConnection(function(err,connect){//通过getConnection()方法进行数据库连接
//     if(err){
//         console.log(`mysql链接失败${err}`);
//     }else{
//         connect.query('select * from users',function(err,result){
//             if(err){
//                 console.log(`SQL error:${err}`)
//             }else{
//                 console.log(result);
//                 connect.release();//释放连接池中的数据库连接
//                 pool.end();//关闭连接池
//             }
//         })
//     }
// })

module.exports = pool