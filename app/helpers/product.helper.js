const models = require("../models");
const ProductModel = models.products;
const Op = models.Sequelize.Op;

exports.create = (product, res) => {
    ProductModel.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Product."
            });
        });
};

exports.findAll = (invoiceId, res) => {
    const condition = invoiceId ? { invoiceId: { [Op.eq]: invoiceId } } : null;
    ProductModel.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving products."
            });
        });
};