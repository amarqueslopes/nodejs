const InvoiceHelper = require("../helpers/invoice.helper.js");
const InvoiceFactory = require("../factories/invoice.factory.js");
const InvoiceValidator = require("../validators/invoice.validator.js");

exports.create = (req, res) => {
    if (!InvoiceValidator.validate(req.body.invoiceNumber, req.body.clientName)) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const invoice = InvoiceFactory.create(
        req.body.invoiceNumber,
        req.body.clientName,
        req.body.postedDate,
        req.body.status
    );

    InvoiceHelper.create(invoice, res);
};

exports.findAll = (req, res) => {
    const clientNames = req.query.clientNames;
    InvoiceHelper.findAll(clientNames, res);
};

exports.find = (req, res) => {
    const id = req.params.id;
    InvoiceHelper.findByPk(id, res);
};