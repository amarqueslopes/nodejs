exports.create = (description, sku, price, qty, invoiceId) => {
    const product = {
        description: description,
        sku: sku,
        price: price,
        qty: qty,
        invoiceId: invoiceId
    };
    return product;
};