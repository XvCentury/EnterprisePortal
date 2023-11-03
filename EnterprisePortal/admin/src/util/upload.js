import axios from "axios";
function upload(path,userForm){
    //因为userfrom是一个普通对象，其中还含有文件，所以不能直接写在请求里发给后端，要给它变成fromdata的形式
    const params = new FormData()
    for(let i in userForm){
        params.append(i,userForm[i])
    }
    //console.log(params)
    return axios.post(path,params,{
        //如果请求传的数据是带有文件的话，必须按如下声明头部
        Headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(res=>res.data)
}

export default upload