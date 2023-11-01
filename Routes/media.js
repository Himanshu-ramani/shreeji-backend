const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userControllers");
const {
  createProduct,
  getProducts,
} = require("../Controllers/productsControllers");
const upload = require("../models/middleware/multer");
const Media = require("../models/media");
const multer = require("multer");

// routes
router.post("/media", async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Handle Multer errors
      console.error(err);
      res.status(500).json({ error: "Error uploading media" });
    } else if (err) {
      // Handle other errors
      console.error(err);
      res.status(500).json({ error: "Error uploading media" });
    } else {
      // File uploaded successfully
      res.status(201).json({ message: "Media uploaded successfully" });
    }
  });
});

module.exports = router;
