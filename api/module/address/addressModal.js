const mongoose =require('../mainDB') 
const addressschema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    pincode:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true
    },
    date:{
        type:String
    },
    status:{
        type:Number,
        default:0
    }
})
const addressmodel = mongoose.model('address',addressschema);
module.exports = addressmodel;