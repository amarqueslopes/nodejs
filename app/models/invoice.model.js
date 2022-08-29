module.exports = (sequelize, Sequelize) => {
    const Invoice = sequelize.define("invoice", {
        invoiceNumber: {
            type: Sequelize.STRING
        },
        clientName: {
            type: Sequelize.STRING
        },
        postedDate: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.STRING
        }
    });
    return Invoice;
  };