const express = require("express");
const brandController = require("../controllers/brandController");
const Joi = require("joi");
const router = express.Router();

router.post("/addBrand", brandController.postAddBrands);
router.get("/:id", brandController.getBrandById);
router.get("/", brandController.getBrands);
router.put("/:id", brandController.postEditBrand);
router.delete("/:id", brandController.deleteBrand);

module.exports = router;
