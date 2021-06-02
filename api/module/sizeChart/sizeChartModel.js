const mongoose =require('../mainDB') 
const sizeChartschema = new mongoose.Schema({
    columns:{
        type:String,
        required:true
    },
    columnsData:{
        type:String,
        required:true,
    },
    date:{
        type:Date, 
        default:new Date()      
    }
})
const sizechartmodel = mongoose.model('sizeChart', sizeChartschema);
module.exports = sizechartmodel;