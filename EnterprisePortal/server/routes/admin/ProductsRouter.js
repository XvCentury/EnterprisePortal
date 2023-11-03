

var express = require('express');
var ProductsRouter = express.Router()

const AddController = require('../../controllers/admin/products/AddController')
const ListController = require('../../controllers/admin/products/ListController');

//图片上传模块
const multer = require('multer');
const upload = multer({ dest: 'public/productsuploads/' })//上传到哪个指定文件夹

//添加產品請求 
ProductsRouter.post('/adminapi/product/add', upload.single('file'), AddController.add)

//获取产品列表
ProductsRouter.get('/adminapi/product/list',ListController.getList)

//删除产品
ProductsRouter.delete('/adminapi/product/list/:pid',ListController.deleteList)

//产品编辑(修改)页面请求数据
ProductsRouter.get('/adminapi/product/list/:pid',ListController.getSingleList)

//产品编辑(修改)页面上传数据
ProductsRouter.post('/adminapi/product/list/:pid',upload.single('file'),ListController.upload)


module.exports = ProductsRouter