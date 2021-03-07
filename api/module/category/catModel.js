const mongoose =require('../mainDB') 
const catschema = new mongoose.Schema({
    catName:{
        type:String,
        required:true
    },
    slug:{
        type:String
    },
    desc:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true
    },
    parentCatId:{
       type:String
    },
    productId:{
        type:String,
        required:true
    },
    metaKeyword:{
        type:String
    }
})
const catmodel = mongoose.model('category', catschema);
module.exports = catmodel;