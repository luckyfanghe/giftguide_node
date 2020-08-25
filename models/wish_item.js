const mongoose = require("mongoose");

const WishItemSchema = new mongoose.Schema({
  item_name: {
    type: String
  },
  item_description: {
    type: String
  },
  price: {
    type: Number
  },
  price_options: {
    type: Number
  },
  url_webAddress: String,
  color_flavor_type: String,
  size: String,
  quantity: Number,
  image_path: String,
  gift_state: Number
});

const WishItem = mongoose.model("WishItem", WishItemSchema);
module.exports = WishItem;
