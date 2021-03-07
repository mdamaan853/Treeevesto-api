const productModel = require('../../module/product/productModel')
module.exports = ({
    createProduct: (req, res) => {
     new productModel({
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        productImages: req.files.productImages,
        productType: req.body.productType,
        regularPrice: req.body.regularPrice,
        sellingPrice: req.body.sellingPrice,
        startSale:req.body.startSale ,
        endSale:req.body.endSale ,
        productUrl:req.body.productUrl ,
        buttonText:req.body.buttonText ,
        productUrl:req.body.productUrl ,
        taxStatus:req.body.taxStatus ,
        taxCode:req.body.taxCode ,
        sku:req.body.sku ,
        stockQuantity:req.body.stockQuantity ,
        allowBackOrder:req.body.allowBackOrder ,
        lowStockTh:req.body.lowStockTh ,
        shippingWeight:req.body.shippingWeight ,
        shippingDimensions:req.body.shippingDimensions ,
        attributeType:req.body.attributeType ,
        attributeName:req.body.attributeName ,
        attributeValue:req.body.attributeValue ,
        upsells:req.body.upsells,
        date:Date.now(),
        }).save((err, data) => {
        if (err){
            console.log('error...'+err)
        };
        return res(null,data)
    })
},
getAllProduct: (req, res) => {
    productModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getProductById: (req, res) => {
    productModel.find({_id:req.params.id}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}
})