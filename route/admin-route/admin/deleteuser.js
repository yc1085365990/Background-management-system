const { User,Product } = require('../../../mongodb/db');
module.exports = async (req, res) => {
    let data = await User.findOneAndDelete({ "_id": req.body.id });
    if(data){
        res.redirect("/admin/userlist")
    }
}