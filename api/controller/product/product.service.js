const productModel = require("../../module/product/productModel");
module.exports = {
  createProduct: (req, res) => {
    new productModel({
      vendorId: req.body.vendorId,
      catId: req.body.catId,
      subcatId: req.body.subcatId,
      productName: req.body.productName,
      productDesc: req.body.productDesc,
      productImages: req.body.productImages,
      productType: req.body.productType,
      specificationTable: req.body.specificationTable,
      regularPrice: req.body.regularPrice,
      sellingPrice: req.body.sellingPrice,
      startSale: req.body.startSale,
      endSale: req.body.endSale,
      productUrl: req.body.productUrl,
      buttonText: req.body.buttonText,
      taxStatus: req.body.taxStatus,
      taxCode: req.body.taxCode,
      sku: req.body.sku,
      stockQuantity: req.body.stockQuantity,
      allowBackOrder: req.body.allowBackOrder,
      lowStockTh: req.body.lowStockTh,
      shippingWeight: req.body.shippingWeight,
      shippingDimensions: req.body.shippingDimensions,
      attributeType: req.body.attributeType,
      attributeName: req.body.attributeName,
      attributeValue: req.body.attributeValue,
      upsells: req.body.upsells,
      HSN_Code: req.body.HSN_Code,
      GST: req.body.GST,
      Meta_Keywords: req.body.Meta_Keywords,
      Meta_Data: req.body.Meta_Data,
      Meta_Description: req.body.Description,
      Occasion: req.body.Occasion,
      Colour: req.body.Colour,
      Wash_Care: req.body.Wash_Care,
      Colour_Map: req.body.Colour_Map,
      Ornamentation: req.body.Ornamentation,
      Meta_image_URL:req.body.Meta_image_URL,
      Fabric: req.body.Fabric,
      Print_or_Pattern_Type: req.body.Print_or_Pattern_Type,
      Design_Name: req.body.Design_Name,
      Style: req.body.Style,
      Border_Details: req.body.Border_Details,
      Length: req.body.Length,
      Blouse_Piece_Included: req.body.Blouse_Piece_Included,
      Blouse_Length: req.body.Blouse_Length,
      Blouse_Details: req.body.Blouse_Details,
      Disclaimer: req.body.Disclaimer,
      Sleeve_Type: req.body.Sleeve_Type,
      Neck_Type: req.body.Neck_Type,
      Body_Length: req.body.Body_Length,
      Slit_Detail: req.body.Slit_Detail,
      Top_Fabric: req.body.Top_Fabric,
      Bottom_Fabric: req.body.Bottom_Fabric,
      Top_Length: req.body.Top_Length,
      Bottom_Length: req.body.Bottom_Length,
      Top_Colour: req.body.Top_Colour,
      Bottom_Colour: req.body.Bottom_Colour,
      Dupatta_Colour: req.body.Dupatta_Colour,
      Dupatta_Length: req.body.Dupatta_Length,
      Dupatta_Fabric: req.body.Dupatta_Fabric,
      Dupatta_Design: req.body.Dupatta_Design,
      Top_Design: req.body.Top_Design,
      Bottom_Design: req.body.Bottom_Design,
      Top_Print_or_Pattern: req.body.Top_Print_or_Pattern,
      Bottom_Print_or_Pattern: req.body.Bottom_Print_or_Pattern,
      Dupatta_Print_or_Pattern: req.body.Dupatta_Print_or_Pattern,
      Bust_Size: req.body.Bust_Size,
      Inner_Included: req.body.Inner_Included,
      Inner_Fabric: req.body.Inner_Fabric,
      Package_Includes: req.body.Package_Includes,
      Top_Type: req.body.Top_Type,
      Top_Style: req.body.Top_Style,
      Top_Print_or_Pattern_Type: req.body.Top_Print_or_Pattern_Type,
      Top_Slit_Detail: req.body.Top_Slit_Detail,
      Bottom_Type: req.body.Bottom_Type,
      Top_Stitch: req.body.Top_Stitch,
      Bottom_Stitch: req.body.Bottom_Stitch,
      Border: req.body.Border,
      Inner_Lining: req.body.Inner_Lining,
      Inner_Lining_Fabric: req.body.Inner_Lining_Fabric,
      date: Date.now(),
    }).save((err, data) => {
      if (err) {
        console.log("error..." + err);
        return res (err)
      }
      return res(null, data);
    });
  },
  getAllProduct: (req, res) => {
    productModel.find().sort({_id:-1}).exec((err, data) => {
      if (err) return res (err);
      return res(null, data);
    });
  },
  getProductsBySubCategory: (req, res) => {
    productModel.find({ subcatId: req.params.id }).exec((err, data) => {
      if (err) return res (err);
      return res(null, data);
    });
  },
  getProductById: (req, res) => {
    productModel.find({ _id: req.params.id }).exec((err, data) => {
      if (err) return res (err);
      return res(null, data);
    });
  },
    filterProduct: (req, res) => {
        productModel.find(req).exec((err, data) => {
      if (err) return res (err);
      return res(null, data);
    });
  },
  getProductByVendorId: (req, res) => {
    productModel.find({ vendorId: req.params.id }).exec((err, data) => {
      if (err) return res (err);
      return res(null, data);
    });
  },
  deleteProductById: (req, res) => {
    productModel.deleteMany().exec((err, data) => {
      if (err) return res (err);
      return res(null, data);
    });
  },
};
