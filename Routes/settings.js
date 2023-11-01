const express = require("express");
const {
  createSetting,
  deleteSetting,
  readSetting,
  optionsSettings,
} = require("../Controllers/settingsControllers");
const router = new express.Router();

router.post("/settings/:endpoint", createSetting);
router.delete("/settings/:endpoint", deleteSetting);
router.get("/settings/:endpoint", readSetting);
router.get("/settings", optionsSettings);

module.exports = router;
