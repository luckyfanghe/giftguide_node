const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.get("/", User.getUserAll);

router.get("/:id", User.getUserByID);

router.post("/", User.getUserByUserByScan);

router.post("/add", User.addUser);

router.post("/update/", User.updateUser);

router.delete("/:id", User.deleteUser);

module.exports = router;
