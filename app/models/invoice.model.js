module.exports = (sequelize, Datatypes) => {
    const Invoice = sequelize.define("invoice", {
        invoiceNumber: {
            type: Datatypes.STRING
        },
        clientName: {
            type: Datatypes.STRING
        },
        postedDate: {
            type: Datatypes.DATE
        },
        status: {
            type: Datatypes.STRING
        }
    });
    return Invoice;
  };