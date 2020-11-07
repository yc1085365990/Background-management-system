// 商品列表模块
const { User,Product } = require('../../../mongodb/db')
module.exports = async (req, res) => {
    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 2;

    // 查询数据库中Product集合中一共有多少数据
    let total = await Product.countDocuments();

    let startpage = (page - 1) * size;

    // 计算总页数
    let totalpage = Math.ceil(total/size)

    // 查询数据
    let data = await Product.find({}).limit(size).skip(startpage);
    res.render('./admin/product/productlist.ejs', {
        productlist: data,
        total:total,
        page:page,
        size:size,
        totalpage:totalpage
    })
}