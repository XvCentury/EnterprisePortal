/**
 * 此文件夹放路由配置信息
只负责注册路由
 */
var express = require('express');
var NewsRouter = express.Router();

const AddController = require('../../controllers/admin/news/AddController.js')
const ListController = require('../../controllers/admin/news/ListController.js');
const PublishController = require('../../controllers/admin/news/PublishController.js')


//图片上传模块
const multer  = require('multer');
const upload = multer({ dest: 'public/newsuploads/' })//上传到哪个指定文件夹






//新闻添加请求
//绑定multer插件的single中间件，用来处理文件流
NewsRouter.post('/adminapi/news/add',upload.single('file'),AddController.add);

//获取新闻列表
NewsRouter.get('/adminapi/news/list',ListController.getList)

//更新ispublishi请求
NewsRouter.put('/adminapi/news/publish',PublishController.changePublish)

//删除新闻
NewsRouter.delete('/adminapi/news/list/:num',ListController.deleteList)

//新闻编辑(修改)页面请求数据
NewsRouter.get('/adminapi/news/list/:num',ListController.getSingleList)

//新闻编辑(修改)页面上传数据
NewsRouter.post('/adminapi/news/list/:num',upload.single('file'),ListController.upload)



module.exports = NewsRouter;



