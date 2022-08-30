const ProductHelper = require("../helpers/product.helper.js");
const ProductFactory = require("../factories/product.factory.js");
const ProductValidator = require("../validators/product.validator.js");

exports.create = (req, res) => {
    if (!ProductValidator.validate(req.body.sku, req.body.price, req.body.qty, req.body.invoiceId)) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const product = ProductFactory.create(
        req.body.description,
        req.body.sku,
        req.body.price,
        req.body.qty,
        req.body.invoiceId
    );

    ProductHelper.create(product, res);
};

exports.findAll = (req, res) => {
    const invoiceId = req.params.invoiceId;
    console.log(invoiceId);
    ProductHelper.findAll(invoiceId, res);
};