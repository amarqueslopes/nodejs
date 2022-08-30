module.exports = (sequelize, Datatypes) => {
    const Product = sequelize.define("product", {
        description: {
            type: Datatypes.STRING
        },
        sku: {
            type: Datatypes.STRING
        },
        price: {
            type: Datatypes.FLOAT
        },
        qty: {
            type: Datatypes.INTEGER
        }
    });
    return Product;
  };