const mongoose =require('../mainDB') 
const gstschema = new mongoose.Schema({
    gstName:{
        type:String,
        required:true
    },
    gstPercent:{
        type:String,
        required:true,
    },
    date:{
        type:Date       
    }
})
const gstmodel = mongoose.model('gst', gstschema);
module.exports = gstmodel;