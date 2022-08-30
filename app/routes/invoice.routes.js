module.exports = app => {
    const invoiceController = require("../controllers/invoice.controller.js");
    const invoiceRouter = require("express").Router();
    invoiceRouter.post("/", invoiceController.create);
    invoiceRouter.get("/", invoiceController.findAll);
    invoiceRouter.get("/:id", invoiceController.find);
    app.use('/api/invoices', invoiceRouter);
};