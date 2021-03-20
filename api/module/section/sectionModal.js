const mongoose =require('../mainDB') 
const sectionschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    grid:{
        type:String,
        required:true,
    },
    date:{
        type:Date       
    }
})
const sectionmodel = mongoose.model('section', sectionschema);
module.exports = sectionmodel;