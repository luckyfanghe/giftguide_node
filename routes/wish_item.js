const express = require("express");
const router = express.Router();
const WishList = require("../controllers/wish_item");

router.get("/", WishList.getWishItemAll);

router.get("/:id", WishList.getWishItem);

router.post("/add", WishList.addWishItem);

router.post("/update/", WishList.updateWishItem);

router.delete("/:id", WishList.deleteWishItem);

module.exports = router;
