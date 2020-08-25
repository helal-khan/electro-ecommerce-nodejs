const Sequelize = require("sequelize");
const config = require("../config/db.config.js");

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

//Define model
Role = require("./role.model.js")(sequelize, Sequelize);
User = require("./user.model.js")(sequelize, Sequelize);
Address = require("./address.model.js")(sequelize, Sequelize);
Category = require("./category.model.js")(sequelize, Sequelize);
Product = require("./product.model.js")(sequelize, Sequelize);
Order = require("./order.model.js")(sequelize, Sequelize);
OrderDetails = require("./orderDetails.model.js")(sequelize, Sequelize);

//Association
Role.hasMany(User);
User.belongsTo(Role);

User.hasOne(Address);
Address.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderDetails);
OrderDetails.belongsTo(Order);

Product.hasMany(OrderDetails);
OrderDetails.belongsTo(Product, { as: 'product' });

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Role: Role,
    User: User,
    Address: Address,
    Category: Category,
    Product: Product,
    Order: Order,
    OrderDetails: OrderDetails
}
module.exports = db;