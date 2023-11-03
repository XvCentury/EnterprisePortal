
const jsonwebtoken = require('jsonwebtoken')
//密钥
const secret = "century"
const JWT = {
    //生成token
    //exprires是过期时间
    generate(value,exprires){
        return jsonwebtoken.sign(value,secret,{expiresIn:exprires})
    },
    //验证token
    //verify方法校验的同时也会校验时间是否过期，但缺点是如果过期了则会直接报错
    verify(token){
        try {
            return jsonwebtoken.verify(token,secret)
        } catch (error) {
            return false
        }
    }
}

// const token = JWT.generate({name:'century'},'1d')
// console.log(JWT.verify(token))

// setTimeout(()=>{
//     console.log(JWT.verify(token))
// },11000)

module.exports = JWT