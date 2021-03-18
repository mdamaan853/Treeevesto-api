const express = require('express');
const bodyParser=require('body-parser')
const app = express()
const cors = require('cors')
const catRouter=require('./api/controller/category/cat.router')
const vendorRouter=require('./api/controller/vendor/vender.router')
const productRouter=require('./api/controller/product/product.router')

const PORT=process.env.PORT || 4000


app.use(express.json());
app.use(bodyParser.urlencoded({extended: false }))
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use('/upload/category_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/category_img/'+req.params.id));
app.use('/upload/users_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/users_img/'+req.params.id));
// app.use(express.static('upload'))
app.use('/',catRouter)
app.use('/',vendorRouter)
app.use('/',productRouter)
app.get('/ping',(req,res)=>{
res.send('server is on')
})
app.listen(PORT, () => {
    console.log(`your server has been started on port ${PORT}`)
})
