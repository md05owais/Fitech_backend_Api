const express = require("express");
const model = require("./src/model/brand");
const patron = require("./src/model/patrons");
const sequelize = require("./src/util/db");
const brandsRouts = require("./src/routs/brandsRouts");
const brandController = require("./src/controllers/brandController");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/coedify/api/v1/brands", brandController);
// app.use("/coedify/api/v1/brands", brandsRouts);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.use("/https://coedify/api/v1/brands", brandsRouts);











// app.post("/https://coedify/api/v1/brands/", (req, res) => {
//   brandController.postAddBrands(req, res);
// });

// app.put("/https://coedify/api/v1/brands/:id", (req, res) => {
//   brandController.postEditBrand(req, res);
// });

// app.get("/https://coedify/api/v1/brands/:id", (req, res) => {
//   brandController.getBrandById(req, res);
// });

// app.get("/https://coedify/api/v1/brands", (req, res) => {
//   brandController.getBrands(req, res);
// });

// app.delete("/https://coedify/api/v1/brands/:id", (req, res) => {
//   brandController.deleteBrand(req, res);
// });
