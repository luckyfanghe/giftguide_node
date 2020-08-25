const express = require("express");
const router = express.Router();
const Gift = require("../controllers/gift");

router.get("/", Gift.getGiftAll);

router.get("/:id", Gift.getGift);

router.post("/add", Gift.addGift);

router.post("/update/", Gift.updateGift);

router.delete("/:id", Gift.updateGift);

module.exports = router;
