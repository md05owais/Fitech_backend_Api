const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Patrons = sequelize.define("patron", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  class: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
module.exports = Patrons;
