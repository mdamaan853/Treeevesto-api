    const mongoose =require('../mainDB') 
    const couponschema = new mongoose.Schema({
        couponCode:{
            type:String,
            required:true
        },
        couponName:{
            type:String,
            required:true
        },
        couponDesc:{
            type:String,
            required:true
        },
        discountPercent:{
            type:String,
            required:true,
        },
        discountPrice:{
            type:String,
            required:true,
        },
        couponActive:{
            type:Number,
            default:0
        },
        date:{
            type:Date ,
            default:new Date()
        }
    })
    const couponmodel = mongoose.model('coupon', couponschema);
    module.exports = couponmodel;