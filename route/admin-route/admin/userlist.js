// 用户列表模块
const { User,Product } = require('../../../mongodb/db');
module.exports = async (req, res) => {


    

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 2;

    // 查询数据库中User集合中一共有多少数据
    let total = await User.countDocuments();

    let startpage = (page - 1) * size;

    // 计算总页数
    let totalpage = Math.ceil(total/size);
    console.log(totalpage);

    // 查询数据
    let data = await User.find({}).limit(size).skip(startpage);
    res.render('./admin/user/userlist.ejs', {
        lists: data,
        total:total,
        page:page,
        size:size,
        totalpage:totalpage
    })
}