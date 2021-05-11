const mongoose =require('../mainDB') 
const productreviewschema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        required:true
    },
    reviewImages:{
        type:Array,
    },
    rating:{
        type:Number,
    },
    title:{
        type:String,       
    },
    desc:{
        type:String,     
    },
    like:{
        type:Number,
        default:0      
    },
    dislike:{
        type:Number, 
        default:0        
    },
    date:{
        type:Date,
        default:new Date()       
    }
})
const reviewmodel = mongoose.model('product_review', productreviewschema);
module.exports = reviewmodel;