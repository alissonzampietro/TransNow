const express = require("express");
const translationController = require("../controller/translateController.js");
const router = express.Router();

router.get("/", (req,res) => {
	res.json({'welcome to': 'transnow api'});
});

router.post("/:q", translationController.getTranslation);

module.exports = router;
