module.exports = app => {
    const productController = require("../controllers/product.controller.js");
    var productRouter = require("express").Router();
    productRouter.post("/", productController.create);
    productRouter.get("/:invoiceId", productController.findAll);
    app.use('/api/products', productRouter);
};