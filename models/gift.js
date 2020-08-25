const mongoose = require("mongoose");

const GiftSchema = new mongoose.Schema({
  item_name: {
    type: String
  },
  item_description: {
    type: String
  },
  price: {
    type: Number
  },
  url_webAddress: String,
  color_flavor_type: String,
  size: String,
  quantity: Number,
  image_path: String,
  gift_state: Number,
  userID: String
});

const Gift = mongoose.model("Gift", GiftSchema);
module.exports = Gift;
