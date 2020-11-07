const { User, Product } = require('../../../mongodb/db');
module.exports = async (req,res)=>{
    let data = await Product.findOneAndDelete({'_id':req.query.id});
    if(data){
        res.redirect('/admin/productlist')
    }
}