const { User,Product } = require('../../../mongodb/db');
// 修改用户模块
module.exports = (req, res) => {
    User.findOne({ "_id": req.query.id }).then(result => {
        res.render('./admin/user/edituser.ejs', {
            editData: result
        })
    })
}



