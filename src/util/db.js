const Sequelize = require("sequelize");
const sequelize = new Sequelize("fintech", "root", "yourPassword", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
