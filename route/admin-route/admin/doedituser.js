const { User,Product } = require('../../../mongodb/db');
// 点击修改用户提交表单

module.exports =  (req, res) => {
    let obj = req.body;
    User.updateOne({ "_id": req.query.id }, obj).then(() => {
        res.redirect("/admin/userlist") //重定向--重新跳转到home页面
    })
}