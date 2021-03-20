const mongoose =require('../mainDB') 
const cardschema = new mongoose.Schema({
    sectionId:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true,
    },
    date:{
        type:Date       
    }
})
const cardmodel = mongoose.model('card', cardschema);
module.exports = cardmodel;