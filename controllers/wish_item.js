const express = require("express");
const WishItem = require("../models/wish_item");

const getWishItemAll = (req, res) => {
  return res.json({ msg: "Get WishItem All" });
};

const getWishItem = (req, res) => {
  return res.json({ msg: "Get WishItem" });
};

const addWishItem = (req, res) => {
  return res.json({ msg: "Add WishItem" });
};

const updateWishItem = (req, res) => {
  return res.json({ msg: "update WishItem" });
};

const deleteWishItem = (req, res) => {
  return res.json({ msg: "delete WishItem" });
};

module.exports = {
  getWishItemAll,
  getWishItem,
  addWishItem,
  updateWishItem,
  deleteWishItem
};
