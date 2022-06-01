const Sequelize = require("sequelize");
const sequelize = new Sequelize("fintech", "root", "Gi881600@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
