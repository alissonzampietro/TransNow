const express = require("express");
const translationController = require("../controller/translateController.js");
const router = express.Router();

router.get("/:q", translationController.getTranslation);

module.exports = router;
