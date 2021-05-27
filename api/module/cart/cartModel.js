const mongoose =require('../mainDB') 
const cartschema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    vendorId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    name:{
        type:String
    },
    qty:{
       type:String
    },
    size:{
        type:String
    },
    price:{
        type:String
    },
    date:{
        type:Date,
        default:new Date()
    }
})
const cartmodel = mongoose.model('cart', cartschema);
module.exports = cartmodel;