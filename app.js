const express = require('express');
const bodyParser=require('body-parser')
const app = express()
const cors = require('cors')
const https = require("https")
const fs = require("fs")

const catRouter=require('./api/controller/category/cat.router')
const vendorRouter=require('./api/controller/vendor/vender.router')
const productRouter=require('./api/controller/product/product.router')
const userRouter=require('./api/controller/users/user.router')
const addressRouter=require('./api/controller/address/address.router')
const bannerRouter=require('./api/controller/banner/banner.router')
const cardRouter=require('./api/controller/card/card.router')
const sectionRouter=require('./api/controller/section/section.router')
const orderRouter=require('./api/controller/order/order.router')

const PORT=process.env.PORT || 4000

const httpsServer = https.createServer({
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem'),
  }, app);

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false }))
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use('/upload/category_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/category_img/'+req.params.id));
app.use('/upload/users_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/users_img/'+req.params.id));
app.use('/upload/banner_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/banner_img/'+req.params.id));
app.use('/upload/cardImg/:id',(req,res)=> res.sendFile(__dirname + '/upload/cardImg/'+req.params.id));

// app.use(express.static('upload'))

app.use('/',catRouter)
app.use('/',vendorRouter)
app.use('/',productRouter)
app.use('/',userRouter)
app.use('/',addressRouter)
app.use('/',bannerRouter)
app.use('/',cardRouter)
app.use('/',sectionRouter)
app.use('/',orderRouter)
app.get('/ping',(req,res)=>{
res.send('server is on')
})

httpsServer.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});

