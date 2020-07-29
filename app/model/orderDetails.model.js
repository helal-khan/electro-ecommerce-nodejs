module.exports = (sequelize, Sequelize) => {
    const OrderDetails = sequelize.define(
        "orderDetails",
        {
            quantity: { 
                type: Sequelize.INTEGER,
                allowNull: false
            }
        },
        { tableName: 'orderDetails' }
    );
    return OrderDetails;
};