const mongoose = require("mongoose");

const UserEventSchema = new mongoose.Schema({
  id: {
    type: String
  },
  user_id: {
    type: String
  },
  name: {
    type: String
  }
});

const UserEvent = mongoose.model("UserEvent", UserEventSchema);
module.exports = UserEvent;
