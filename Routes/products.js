const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userControllers");
const { createProduct, getProducts } = require("../Controllers/productsControllers");

// routes
router.post("/products",createProduct);
router.get("/products",getProducts);



module.exports = router;