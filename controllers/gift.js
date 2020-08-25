const express = require("express");
const Gift = require("../models/gift");

const getGiftAll = (req, res) => {
  return res.json({ msg: "Get Gift All" });
};

const getGift = (req, res) => {
  return res.json({ msg: "Get Gift" });
};

const addGift = (req, res) => {
  return res.json({ msg: "Add Gift" });
};

const updateGift = (req, res) => {
  return res.json({ msg: "update Gift" });
};

const deleteGift = (req, res) => {
  return res.json({ msg: "delete Gift" });
};

module.exports = {
  getGiftAll,
  getGift,
  addGift,
  updateGift,
  deleteGift
};
