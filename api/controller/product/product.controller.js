const mongoose =require ("mongoose");
const {
  createProduct,
  getAllProduct,
  getProductsBySubCategory,
  getProductById,
  getProductByVendorId,
  deleteProductById,
  filterProduct,
} = require("./product.service");
module.exports = {
  createProducts: (req, res) => {
    if (req.files) {
      req.body.productImages = req.files.map((element) => {
        return element.path;
      });
      console.log(req.body.productImages);
    }
    createProduct(req, (err, data) => {
      if (err) {
        res.status(500);
        res.json({
          success: 0,
          msg: "error while inserting " + err,
        });
      } else {
        res.json({
          success: 1,
          msg: "successfully regestred",
          result: data,
        });
      }
    });
  },
  getAllProducts: (req, res) => {
    getAllProduct(req, (err, data) => {
      if (err) {
        res.json({
          success: 0,
          msg: "error while fetching " + err,
        });
      } else {
        res.json({
          success: 1,
          result: data,
        });
      }
    });
  },
  getProductsBySubCategory: (req, res) => {
    getProductsBySubCategory(req, (err, data) => {
      if (err) {
        res.json({
          success: 0,
          msg: "Error while fetching by id " + err,
        });
      }
      if (!data) {
        res.json({
          success: 0,
          msg: "no records found",
        });
      } else {
        res.json({
          success: 1,
          result: data,
        });
      }
    });
  },
  getProductsById: (req, res) => {
    getProductById(req, (err, data) => {
      if (err) {
        res.json({
          success: 0,
          msg: "Error while fetching by id " + err,
        });
      }
      if (!data) {
        res.json({
          success: 0,
          msg: "no records found",
        });
      } else {
        res.json({
          success: 1,
          result: data,
        });
      }
    });
  },
  getProductsByVendorId: (req, res) => {
    getProductByVendorId(req, (err, data) => {
      if (err) {
        res.json({
          success: 0,
          msg: "Error while fetching by id " + err,
        });
      }
      if (!data) {
        res.json({
          success: 0,
          msg: "no records found",
        });
      } else {
        res.json({
          success: 1,
          result: data,
        });
      }
    });
  },
  filterProducts: (req, res) => {
    console.log("q",req.query.size)
    var filterColor = "";
    var filterSize = "";
    var filterPrizeFrom = "";
    var filterPrizeTo = "";
    var filterCat = "";
    if(req.query.color){
      filterColor=req.query.color.split(",") 
    }
    if(req.query.size){
      filterSize=req.query.size.split(",")
    }
    if(req.query.from && req.query.to){
      filterPrizeFrom=req.query.from;
      filterPrizeTo=req.query.to;
      console.log(filterPrizeTo)
      console.log(filterPrizeFrom)
    }
    if(req.query.catId){
      filterCat=req.query.catId;
    }
    if (
      filterColor != "" &&
      filterSize != "" &&
      filterPrizeFrom!= "" &&
      filterCat != ""
    ) {
      var flterParameter = {
        $and: [
          { colour: filterColor },
          {
            $and: [
              { size: filterSize },
              { sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom } },
              { catId: filterCat },
            ],
          },
        ],
      };
    } else if (
      filterColor == "" &&
      filterCat != "" &&
      filterPrizeFrom!= "" &&
      filterSize == ""
    ) {
      var flterParameter = {
        $and: [
          { catId: filterCat },
          { sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom } },
        ],
      };
    } else if (
      filterColor != "" &&
      filterSize == "" &&
      filterPrizeFrom!= "" &&
      filterCat != ""
    ) {
      var flterParameter = {
        $and: [
          { colour: filterColor },
          {
            $and: [
              { sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom } },
              { catId: filterCat },
            ],
          },
        ],
      };
    } else if (
      filterColor != "" &&
      filterSize == "" &&
      filterPrizeFrom== "" &&
      filterCat == ""
    ) {
      var flterParameter = { colour: filterColor };
    } else if (
      filterColor != "" &&
      filterSize != "" &&
      filterPrizeFrom== "" &&
      filterCat == ""
    ) {
      var flterParameter = {
        $and: [{ colour: filterColor }, { size: filterSize }],
      };
    } else if (
      filterColor != "" &&
      filterSize == "" &&
      filterPrizeFrom!= "" &&
      filterCat == ""
    ) {
      var flterParameter = {
        $and: [
          { colour: filterColor },
          { sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom } },
        ],
      };
    } else if (
      filterColor != "" &&
      filterSize != "" &&
      filterPrizeFrom!= "" &&
      filterCat == ""
    ) {
      var flterParameter = {
        $and: [
          { colour: filterColor },
          {
            $and: [
              { size: filterSize },
              { sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom }},
            ],
          },
        ],
      };
    } else if (
      filterColor == "" &&
      filterSize != "" &&
      filterPrizeFrom!= "" &&
      filterCat == ""
    ){
      var flterParameter = {
        $and: [
          { size: filterSize },
          { sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom } },
        ],
      };
    } else if (
      filterColor == "" &&
      filterSize == "" &&
      filterPrizeFrom== "" &&
      filterCat != ""
    ) {
      var flterParameter = { catId: filterCat };
    } else if (
      filterColor == "" &&
      filterSize == "" &&
      filterPrizeFrom!= "" &&
      filterCat == ""
    ) {
      var flterParameter = {
        sellingPrice: { $lt: filterPrizeTo, $gt: filterPrizeFrom },
      };
    } else if (
      filterColor == "" &&
      filterSize != "" &&
      filterPrizeFrom== "" &&
      filterCat == ""
    ) {
      var flterParameter = { size: filterSize };
    } else if (
      filterColor == "" &&
      filterSize != "" &&
      filterPrizeFrom== "" &&
      filterCat != ""
    ) {
      var flterParameter = {
        $and: [{ size: filterSize }, { catId: filterCat }],
      };
    } else if (
      filterColor != "" &&
      filterSize != "" &&
      filterPrizeFrom== "" &&
      filterCat != ""
    ) {
      var flterParameter = {
        $and: [
          { colour: filterColor },
          { $and: [{ size: filterSize }, { catId: filterCat }] },
        ],
      };
    } else {
      var flterParameter = {};
    }
     req={Colour:req.query.color}
    console.log(flterParameter);
    // console.log(req.params)
    filterProduct(flterParameter, (err, data) => {
      if (err) {
        res.json({
          success: 0,
          msg: "Error " + err,
        });
      }
      if (!data) {
        res.json({
          success: 0,
          msg: "no records found",
        });
      } else {
        res.json({
          success: 1,
          result: data,
        });
      }
    });
  },
  deleteProductsById: (req, res) => {
    deleteProductById(req, (err, data) => {
      if (err) {
        res.json({
          success: 0,
          msg: "Error while fetching by id " + err,
        });
      }
      if (!data) {
        res.json({
          success: 0,
          msg: "no records found",
        });
      } else {
        res.json({
          success: 1,
          result: data,
        });
      }
    });
  },
};
