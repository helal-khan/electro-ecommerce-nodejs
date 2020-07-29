module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "user",
        {
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: {
                        message: "Username can't be blank"
                    }
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Password can't be blank"
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        message: "Email is not correct"
                    },
                    notEmpty: {
                        message: "Email can't be blank"
                    }
                }
            },
            fname: {
                type: Sequelize.STRING
            },
            lname: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER(10)
            },
            photoUrl: {
                type: Sequelize.TEXT
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Type can't be blank"
                    }
                }
            }
        },
        { tableName: 'user' }
    );
    return User;
};