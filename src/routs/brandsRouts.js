const express = require("express");
const brandController = require("../controllers/brandController");
const Joi = require("joi");
const router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  console.log("md owais");
  res.send("md owais");
  return;
});
