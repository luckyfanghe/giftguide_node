const express = require("express");
const router = express.Router();
const UserEvent = require("../controllers/user_evnet");

router.get("/", UserEvent.getUserEventAll);

router.get("/:id", UserEvent.getUserEvent);

router.post("/add", UserEvent.addUserEvent);

router.post("/update/", UserEvent.updateUserEvent);

router.delete("/:id", UserEvent.deleteUserEvent);

module.exports = router;
