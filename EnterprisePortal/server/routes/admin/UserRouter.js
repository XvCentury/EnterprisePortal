/**
 * 此文件夹放路由配置信息
只负责注册路由
 */
var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/user/LoginController.js')
const UploadController = require('../../controllers/admin/user/UploadController.js')
const AddController = require('../../controllers/admin/user/AddController.js')
const ListController = require('../../controllers/admin/user/ListController.js')
//图片上传模块
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })//上传到哪个指定文件夹




//登录请求
UserRouter.post('/adminapi/user/login', UserController.login);

//用户信息更新请求
//绑定multer插件的single中间件，用来处理文件流
UserRouter.post('/adminapi/user/upload',upload.single('file'),UploadController.upload);

//添加用户请求
UserRouter.post('/adminapi/user/add',upload.single('file'),AddController.add);

//获取用户列表请求
//无需使用single中间件，因为不涉及到上传
UserRouter.get('/adminapi/user/list', ListController.getList);

//删除用户请求
UserRouter.delete('/adminapi/user/list/:id', ListController.deleteList);

//修改用户请求
UserRouter.put('/adminapi/user/list/:id', ListController.putList);


module.exports = UserRouter;



