const { User, Product } = require('../../../mongodb/db')
module.exports = async (req, res) => {



    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 2;

    // 查询数据库中Product集合中一共有多少数据
    let total = await Product.countDocuments({ title: new RegExp(req.query.title, 'gi'), price: { $gt: req.query.price1, $lt: req.query.price2 } });

    let startpage = (page - 1) * size;

    // 计算总页数
    let totalpage = Math.ceil(total / size)


    let min = req.query.price1 || 0
    let max = req.query.price2 || 10000000000
    // 查询数据
    let data = await Product.find({ title: new RegExp(req.query.title, 'gi'), price: { $gt: min, $lt: max } }).limit(size).skip(startpage);
    res.render('./admin/product/productsearch.ejs', {
        productlist: data,
        total: total,
        page: page,
        size: size,
        totalpage: totalpage
    })
}