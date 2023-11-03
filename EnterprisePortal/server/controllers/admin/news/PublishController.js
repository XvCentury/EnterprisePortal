const pool = require('../../../config/db.config')

const PublishController = {
    changePublish(req,res){
        console.log(req.body)
        const { num,isPublish } = req.body
        editTime = new Date()

        pool.getConnection(function(err,connection){
            var $sql = 'update news set isPublish=?,editTime=? where num=?'
            connection.query($sql,[isPublish,editTime,num],function(err,result){
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

module.exports = PublishController