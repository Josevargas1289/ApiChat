const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "chat",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1289",
    dialect: "postgres",
    logging: false,
});

module.exports = db;