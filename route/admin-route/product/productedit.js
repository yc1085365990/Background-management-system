// 修改商品模块
const { User, Product } = require('../../../mongodb/db');
module.exports = async (req, res) => {
    const data = await Product.findOne({'_id':req.query.id});
    res.render('./admin/product/productedit.ejs',{
        productlist:data
    })
}