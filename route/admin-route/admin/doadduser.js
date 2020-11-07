const { User,Product } = require('../../../mongodb/db');
// 点击添加用户提交表单
const md5 = require('md5');
module.exports = async (req, res) => {
    let userInfo = {
        username: req.body.username,
        password: md5(req.body.password),
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    }
    let resultUser=await User.findOne({username: req.body.username})
    
    if(resultUser){
        res.redirect('/admin/userlist')
        return;
    }else{
        let result = await User.create(userInfo)
        if (result) {
            res.redirect('/admin/userlist')
        }
    }
}