 const dev_db = {
    host: "localhost",
    username: "root",
    password: null,
    database: "electro_ecommerce",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}

const pro_db = {
    host: "localhost",
    username: "root",
    password: null,
    database: "project_management",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = dev_db;