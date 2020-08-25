const express = require("express");

const gift = require("./gift");
const user = require("./user");
const user_event = require("./user_event");
const wish_item = require("./wish_item");

const router = express.Router();

router.use("/user", user);
router.use("/gift", gift);
// router.use("/user_event", user_event);
router.use("/wish_item", wish_item);
module.exports = router;
