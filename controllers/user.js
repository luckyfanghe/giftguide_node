const express = require("express");
const User = require("../models/User");
const uuid = require("node-uuid");
const Dynamodb = require("../db/dynamodb");

const getUserAll = async (req, res) => {
  var result = await Dynamodb.getDataAll("User");
  return res.json(result);
};

const getUserByID = async (req, res) => {
  var user_data = req.params;
  var result = await Dynamodb.getDataByID("User", user_data);
  return res.json(result);
};

const getUserByUserByScan = async (req, res) => {
  var user_data = req.body;
  var result = await Dynamodb.getDataByScan("User", user_data);
  return res.json(result);
};

const addUser = async (req, res) => {
  var user_data = req.body;
  var email_data = { email: user_data.email };
  var result = await Dynamodb.getDataByScan("User", email_data);
  if (result.msg == "success" && result.data.length == 0) {
    user_data["id"] = uuid.v4();
    var result = await Dynamodb.addData("User", user_data);
    return res.json(result);
  } else if (result.msg == "success" && result.data.length != 0) {
    return res.json({ msg: "already user" });
  } else {
    return res.json(result);
  }
};

const updateUser = async (req, res) => {
  var user_data = req.body;
  var result = await Dynamodb.updateData("User", user_data);
  return res.json(result);
};

const deleteUser = async (req, res) => {
  var user_data = req.params;
  var result = await Dynamodb.deleteData("User", user_data);
  return res.json(result);
};

module.exports = {
  getUserAll,
  getUserByID,
  getUserByUserByScan,
  addUser,
  updateUser,
  deleteUser
};
