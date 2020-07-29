module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define(
        "order",
        {},
        { 
            tableName: 'order', 
            updatedAt: false
        }
    );
    return Order;
};