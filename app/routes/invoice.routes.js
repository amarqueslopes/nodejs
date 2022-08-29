module.exports = app => {
    const invoiceController = require("../controllers/invoice.controller.js");
    var router = require("express").Router();
    // Create a new Invoice
    router.post("/", invoiceController.create);
    // Retrieve all Invoices
    router.get("/", invoiceController.findAll);
    // Retrieve a single Invoices with id
    router.get("/:id", invoiceController.find);
    app.use('/api/invoices', router);
};