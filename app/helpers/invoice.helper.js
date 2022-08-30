const models = require("../models");
const InvoiceModel = models.invoices;
const ProductModel = models.products;
const Op = models.Sequelize.Op;

exports.create = (invoice, res) => {
    InvoiceModel.create(invoice)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Invoice."
            });
        });
};

exports.findAll = (clientNames, res) => {
    const condition = clientNames ? { clientName: { [Op.in]: clientNames.split(',') } } : null;
    InvoiceModel.findAll({ where: condition, include: { model: ProductModel, as: 'products' }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving invoices."
            });
        });
};

exports.findByPk = (id, res) => {
    InvoiceModel.findByPk(id, { include: products })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Invoice with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Invoice with id=" + id
            });
        });
};