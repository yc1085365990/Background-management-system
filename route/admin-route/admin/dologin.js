const { User,Product } = require('../../../mongodb/db');
const md5 = require('md5');
module.exports = async (req, res) => {
    let userInfo = {
        username: req.body.username,
        password: md5(req.body.password)
    };
    let isuser = await User.findOne({
        'username': req.body.username
    });
    let ispsw = await User.findOne({
        'password': md5(req.body.password)
    });
    if(!isuser){
        res.send('<script>alert("该用户不存在"); location.href = "/admin/login"</script>');
    }else if(!ispsw){
        res.send('<script>alert("密码错误"); location.href = "/admin/login"</script>')
    }else{
        let islogin = await User.findOne(userInfo);
        if(islogin){
            req.app.locals.username = req.body.username
            req.session.username = req.body.username
            res.redirect("/admin/userlist")
        }
    }
}