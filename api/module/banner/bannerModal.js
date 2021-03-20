const mongoose =require('../mainDB') 
const bannerschema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true,
    },
    status:{
        type:Number,
        default:0
    },
    date:{
        type:Date       
    }
})
const bannermodel = mongoose.model('banner', bannerschema);
module.exports = bannermodel;