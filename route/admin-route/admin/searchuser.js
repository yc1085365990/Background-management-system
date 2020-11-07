const { User,Product } = require('../../../mongodb/db');

module.exports = async (req, res) => {
    
    console.log(req.query);
    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 2;

    // 查询数据库中User集合中一共有多少数据
    let total = await User.countDocuments({ 'username': new RegExp(req.query.sname,'gi') });

    let startpage = (page - 1) * size;

    // 计算总页数
    let totalpage = Math.ceil(total/size)

    // 查询数据
    let data = await User.find({ 'username': new RegExp(req.query.sname,'gi') }).limit(size).skip(startpage);
    res.render('./admin/user/searchuser.ejs', {
        lists: data,
        total:total,
        page:page,
        size:size,
        totalpage:totalpage,
        username:req.query.username
    })
}