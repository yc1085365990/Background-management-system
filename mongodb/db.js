const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Users', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('数据库连接成功');
}).catch((err) => {
    console.log('数据库连接失败');
});


// 创建一个用户集合规则
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '请输入用户名'],
        minlength: 6,
        maxlength: 12,
        trim: true
    },
    password: {
        type: String,
        required: [true, '请输入密码'],
        minlength: 8,
        maxlength: 222222,
        trim: true
    },
    sex: {
        type: String,
        required: [true, '性别不能为空'],
        enum: {
            values: ['男', '女', '不好说'],
            message: "请选择正确的性别"
        },
    },
    age: {
        type: Number,
        min: 12,
        max: 80
    },
    address: {
        type: String
    }
})


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请输入商品名'],
        trim: true
    },
    pic: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, '请输入商品单价'],
        trim: true
    },
    stamp: {
        type: String,
        required: [true, '请输入商品邮费'],
        trim: true
    },
    cate_id: { //一级分类id
        type: String
    },
    goods_id: { //二级分类id
        type: String
    },
    content: { //详情内容
        type: String
    }
})

// 使用集合规则创建集合
const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    User,
    Product
};