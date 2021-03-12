const { string } = require("joi");
const mongoose = require("../mainDB");
const productschema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, " name required"],
  },
  productDesc: {
    type: String,
    required: [true, "Desc name required"],
  },
  productImages: {
    type: Array,
    required: [true, "images required"],
  },
  productType: {
    type: String,
    required: [true, "Type is required required"],
  },
  regularPrice: {
    type: String,
    required: true,
  },
  sellingPrice: {
    type: String,
    required: true,
  },
  startSale: {
    type: String,
  },
  endSale: {
    type: Date,
  },
  buttonText: {
    type: String,
  },
  productUrl: {
    type: String,
  },
  taxStatus: {
    type: String,
  },
  taxCode: {
    type: String,
  },
  sku: {
    type: String,
  },
  stockQuantity: {
    type: Number,
  },
  allowBackOrder: {
    type: String,
  },
  lowStockTh: {
    type: String,
  },
  shippingWeight: {
    type: String,
  },
  shippingDimensions: {
    type:String
  },
  attributeType: {
    type: String,
  },
  attributeName: {
    type: String,
  },
  attributeValue: {
    type: String,
  },
  groupedProduct: {
    type: String,
  },
  upsells: {
    type: String,
  },
  status: {
    type: Number,
    maximum: 1,
    default: 0,
  },
  date: {
    type: Date,
  },
});
const productmodel = mongoose.model("product", productschema);
module.exports = productmodel;
