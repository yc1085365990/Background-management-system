const express = require('express');
const router = express.Router();

// 引入登陆模块

// 登陆页面
router.get('/login', require('./admin-route/admin/login'))
router.post("/dologin",require('./admin-route/admin/dologin'))
router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect('/admin/login')
})


// 用户列表
router.get('/userlist', require('./admin-route/admin/userlist'))
// 添加用户
router.get('/adduser', require('./admin-route/admin/adduser'))
router.post('/doadduser',require('./admin-route/admin/doadduser'))
// 修改用户
router.get('/edituser', require('./admin-route/admin/edituser'))

// 确定修改用户
router.post("/doedituser",require('./admin-route/admin/doedituser'))
// 删除用户
router.post('/deleteuser',require('./admin-route/admin/deleteuser'))

// 搜索用户
router.get("/searchuser",require('./admin-route/admin/searchuser'))



// 商品列表
router.get('/productlist', require('./admin-route/product/productlist'))
// 添加商品
router.get('/productadd', require('./admin-route/product/productadd'))
router.post('/doproductadd', require('./admin-route/product/doproductadd'))
// 修改商品信息
router.get('/productedit', require('./admin-route/product/productedit'))
router.post('/doproductedit', require('./admin-route/product/doproductedit'))
// 删除商品信息
router.get('/productdelete', require('./admin-route/product/productdelete'))
// 搜索商品信息
router.get('/productsearch', require('./admin-route/product/productsearch'))



module.exports = router;