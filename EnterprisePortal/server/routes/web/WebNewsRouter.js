/**
 * 此文件夹放路由配置信息
只负责注册路由
 */
var express = require('express');
var WebNewsRouter = express.Router();


const ListController = require('../../controllers/web/news/ListController.js');



//获取新闻列表
WebNewsRouter.get('/webapi/news/list',ListController.getList)

//获取新闻
WebNewsRouter.get('/webapi/news/new/:num',ListController.getNew)

////只要前四个
WebNewsRouter.get('/webapi/news/new4',ListController.getNew4)




module.exports = WebNewsRouter;



