exports.validate = (invoiceNumber, clientName) => {
    if (!invoiceNumber || !clientName) {
        return false;
    }
    return true;
};