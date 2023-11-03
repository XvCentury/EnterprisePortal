/**
 * 此文件夹放路由配置信息
只负责注册路由
 */
var express = require('express');
var WebProductsRouter = express.Router();


const ListController = require('../../controllers/web/products/ListController');



//获取新闻列表
WebProductsRouter.get('/webapi/products/list',ListController.getList)



module.exports = WebProductsRouter;



