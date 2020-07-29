module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define(
        "product",
        {
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Product title can't be blank"
                    }
                }
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Product image can't be blank"
                    }
                }
            },
            images: {
                type: Sequelize.TEXT
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Description can't be blank"
                    }
                }
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Price can't be blank"
                    }
                }
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Quantity can't be blank"
                    }
                }
            },
            shortDescription: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Short description description can't be blank"
                    }
                }
            },
        },
        { tableName: 'product' }
    );
    return Product;
};