module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define(
        "role",
        {
            name: { 
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: {
                        message: "Role can't be blank"
                    }
                }
            }
        },
        { tableName: 'role' }
    );
    return Role;
};