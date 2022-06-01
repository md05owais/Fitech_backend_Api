const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "databaseName",
  "YouruserName",
  "yourPassword",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
