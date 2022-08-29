exports.create = (invoiceNumber, clientName, postedDate, status) => {
    const invoice = {
        invoiceNumber: invoiceNumber,
        clientName: clientName,
        postedDate: postedDate ? postedDate : Date.now(),
        status: status ? status : 'active'
    };
    return invoice;
};