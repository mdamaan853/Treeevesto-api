const mongoose =require('../mainDB') 
const orderedProschema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    vendorId:{
        type:String,
        required:true
    },
    image:{
        type:String,
        // required:true,
    },
    name:{
        type:String,
        // required:true
    },
    price:{
       type:String,
       default:0
    },
    qty:{
        type:String
    },
    size:{
        type:String
    },
    date:{
        type:Date,
        default:new Date()
    }
})
const orderedPromodel = mongoose.model('orderedProduct', orderedProschema);
module.exports = orderedPromodel;