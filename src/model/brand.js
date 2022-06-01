const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Brands = sequelize.define("brand", {
  brandId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  BrandCode: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  brandName: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  websiteURL: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  legalName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  legalConstitution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  businessPAN: {
    type: Sequelize.STRING,
    validate: { len: [10, 10] },
    allowNull: false,
  },
  dateOfIncorporation: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  cin_LLPIN: {
    type: Sequelize.STRING,
    validate: { len: [21, 21] },
    allowNull: false,
  },
});

module.exports = Brands;
