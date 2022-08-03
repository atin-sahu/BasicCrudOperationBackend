const express = require("express");
const cors = require("cors");
app.use(cors());
const userController = require("./controller/user.controller");
const productController = require("./controller/product_controller");
const app = express();

app.get("", (req, res) => {
  try {
    res.send("homepage");
  } catch (error) {
    res.send(error);
  }
});

app.use(express.json());
app.use("/users", userController);
app.use("/products", productController);

module.exports = app;
