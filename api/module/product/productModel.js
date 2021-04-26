const { string } = require("joi");
const mongoose = require("../mainDB");
const productschema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: [true, " vendorId required"],
  },
  catId: {
    type: String,
    required: [true, " catId required"],
  },
  subcatId: {
    type: String,
    required: [true, " subcatId required"],
  },
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
    required: [true, "Type is  required"],
  },
  // specification columns start////////////////////
  Occasion : {
    type: String,
  },
  Colour  : {
    type: String,
  },
  Wash_Care : {
    type: String,
  },
  Colour_Map : {
    type: String,
  },
  Ornamentation  : {
    type: String,
  },
  Weave_Type : {
    type: String,
  },
  Fabric  : {
    type: String,
  },
  Print_or_Pattern_Type : {
    type: String,
  },
  Design_Name  : {
    type: String,
  },
  Style : {
    type: String,
  },
  Border_Details : {
    type: String,
  },
  Length : {
    type: String,
  },
  Blouse_Piece_Included : {
    type: String,
  },
  Blouse_Length : {
    type: String,
  },
  Blouse_Details  : {
    type: String,
  },
  Disclaimer  : {
    type: String,
  },
  Package_Includes  : {
    type: String,
  },
  Sleeve_Type  : {
    type: String,
  },
  Neck_Type  : {
    type: String,
  },
  Body_Length : {
    type: String,
  },
  Slit_Detail  : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Top_Fabric : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  Occasion : {
    type: String,
  },
  // specification columns end////////////////////
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
