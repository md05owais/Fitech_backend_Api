const Brands = require("../model/brand");
const brandValidate = require("../validation/brandValidation");

exports.postAddBrands = (req, res, next) => {
  const brandId = req.body.brandId;
  const BrandCode = req.body.BrandCode;
  const brandName = req.body.brandName;
  const email = req.body.email;
  const websiteURL = req.body.websiteURL;
  const legalName = req.body.legalName;
  const legalConstitution = req.body.legalConstitution;
  const businessPAN = req.body.businessPAN;
  const dateOfIncorporation = req.body.dateOfIncorporation;
  const cin_LLPIN = req.body.cin_LLPIN;
  let { error } = brandValidate.validate(req.body);

  if (error) {
    res.send(error.details[0].message);
    return;
  }
  Brands.create({
    brandId: brandId,
    BrandCode: BrandCode,
    brandName: brandName,
    email: email,
    websiteURL: websiteURL,
    legalName: legalName,
    legalConstitution: legalConstitution,
    businessPAN: businessPAN,
    dateOfIncorporation: dateOfIncorporation,
    cin_LLPIN: cin_LLPIN,
  })
    .then((result) => {
      console.log("data added");
      res.status(201).send("Data added successfully");
    })
    .catch((err) => console.log(err));
};

exports.getBrands = (req, res, next) => {
  Brands.findAll()
    .then((brands) => res.send(brands))
    .catch((err) => res.send(err.message));
};

exports.getBrandById = (req, res, next) => {
  const id = req.params.id;
  Brands.findAll({
    where: { brandId: id },
  })
    .then((brand) => {
      if (brand.length === 0) {
        throw new Error("Record not found");
      }
      res.send(brand);
    })
    .catch((err) => res.status(404).send(err.message));
};
exports.postEditBrand = (req, res, next) => {
  const id = req.params.id;
  const updatedBrandCode = req.body.BrandCode;
  const updatedBrandName = req.body.brandName;
  const updatedEmail = req.body.email;
  const updatedWebsiteURL = req.body.websiteURL;
  const updatedLegalName = req.body.legalName;
  const updatedLegalConstitution = req.body.legalConstitution;
  const updatedBusinessPAN = req.body.businessPAN;
  const updatedDateOfIncorporation = req.body.dateOfIncorporation;
  const updatedCin_LLPIN = req.body.cin_LLPIN;

  let { error } = brandValidate.validate(req.body);

  if (error) {
    res.send(error.details[0].message);
    return;
  }
  Brands.findAll({
    where: { brandId: id },
  })
    .then(([brand]) => {
      if (!brand) res.status(400).send("irrelevent request ");
      brand.BrandCode = updatedBrandCode;
      brand.brandName = updatedBrandName;
      brand.email = updatedEmail;
      brand.websiteURL = updatedWebsiteURL;
      brand.legalName = updatedLegalName;
      brand.legalConstitution = updatedLegalConstitution;
      brand.businessPAN = updatedBusinessPAN;
      brand.dateOfIncorporation = updatedDateOfIncorporation;
      brand.cin_LLPIN = updatedCin_LLPIN;
      return brand.save();
    })
    .then((result) => res.send("Updated Record"))
    .catch((err) => console.log(err));
};

exports.deleteBrand = (req, res, next) => {
  const id = req.params.id;
  // Brands.destroy({})
  Brands.findAll({
    where: { brandId: id },
  })
    .then(([brand]) => {
      return brand.destroy();
    })
    .then((result) => res.send("deleted successfully"))
    .catch((err) => res.status(404).send(err.message));
};
