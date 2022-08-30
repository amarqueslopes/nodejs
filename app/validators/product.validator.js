exports.validate = (sku, price, qty, invoiceId) => {
    if (!sku || !price || !qty || !invoiceId) {
        return false;
    }
    return true;
};