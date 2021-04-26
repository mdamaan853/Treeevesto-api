const mongoose =require('../mainDB') 
const specTableschema = new mongoose.Schema({
    catId:{
        type:String,
        required:true
    },
    field:{
        type:Array,
        required:true
    },
    date:{
        type:Date,
        default:new Date(),
        // required:true
    },
    
})
const specTablemodel = mongoose.model('specificationTable', specTableschema);
module.exports = specTablemodel;