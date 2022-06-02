const Joi = require("joi");

const brandValidate = Joi.object({
  brandCode: Joi.string().max(10).required(),
  brandName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  websiteURL: Joi.string(),
  legalName: Joi.string().min(3).max(20).required(),
  legalConstitution: Joi.string().min(3),
  businessPAN: Joi.string().min(10).max(10).required(),
  dateOfIncorporation: Joi.string().isoDate().required(),
  cin_LLPIN: Joi.string().min(21).max(21).required(),
});

module.exports = brandValidate;
