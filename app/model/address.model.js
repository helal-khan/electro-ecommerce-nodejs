module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
        "address",
        {
            line1: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Line 1 can't be blank"
                    }
                }
            },
            line2: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Line 2 can't be blank"
                    }
                }
            },
            city: {
                type: Sequelize.STRING(45),
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "City can't be blank"
                    }
                }
            },
            state: {
                type: Sequelize.STRING(45),
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "State can't be blank"
                    }
                }
            },
            country: {
                type: Sequelize.STRING(45),
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Country can't be blank"
                    }
                }
            },
            phone: {
                type: Sequelize.STRING(10),
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Phone can't be blank"
                    }
                }
            },
            pincode: {
                type: Sequelize.INTEGER,
            }
        },
        { tableName: 'address' }
    );
    return Address;
};