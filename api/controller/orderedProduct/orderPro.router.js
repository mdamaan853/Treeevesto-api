const express = require("express");
const router = express.Router();
const multer = require("multer");
const { pipeline } = require("stream");
const orderedProduct = require("../../module/product/orderedProducts");
const user = require("../../module/users/userModal");

const {
  createOrderProducts,
  getAllOrderProducts,
  getOrderProductsById,
  getOrderProductsByVendorId,
  updateOrderProductsById,
  deleteOrderProductsById,
  getOrderedProductDetails,
} = require("./orderPro.controller");

// const auth = require('../../middleware/Auth')

const storage = multer.diskStorage({
  destination: "./upload/orderedProduct",
  filename: (req, file, cb) => {
    return cb(null, file.fieldname + Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
}).single("image");

router.post("/orderedproduct", upload, createOrderProducts);

router.get("/orderedproduct", getAllOrderProducts);

router.get("/orderedproduct/:id", getOrderProductsById);

router.get("/orderedproduct/vendor/:vendorid", getOrderProductsByVendorId);

router.get(
  "/orderedproduct/getreview/:userid/:productid",
  getOrderedProductDetails
);

router.patch("/orderedproduct/:id", upload,updateOrderProductsById);

router.delete("/orderedproduct/:id", deleteOrderProductsById);

router.get("/innerjoin", (req, res) => {
  orderedProduct.find().populate()
    .exec((err, data) => {
      if (err) {
        res.send(err);
      }
      if (data) {
        res.send({
          success: 1,
          data: data,
        });
      }
    });
});

module.exports = router;
