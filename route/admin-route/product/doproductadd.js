// 添加商品模块
const { User, Product } = require('../../../mongodb/db');
//引入formidable模块
const formidable = require("formidable");
const path = require("path");
// 点击添加用户提交表单
module.exports = (req, res) => {
    //1、创建一个表单解析对象
    const form = new formidable.IncomingForm();
    //2、配置上传文件存放位置，放置在public文件夹下面的uploads
    form.uploadDir = path.join(__dirname, '../', '../', '../', "public", 'uploads');
    //3、保存文件的后缀
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {

        let result = await Product.create({
            title: fields.title,
            price: fields.price,
            stamp: fields.stamp,
            cate_id: fields.cate_id,
            goods_id: fields.goods_id,
            content: fields.content,
            pic: files.pic.path.split('public')[1]
        })
        if (result) {
            res.redirect('/admin/productlist')
        }
    })
}