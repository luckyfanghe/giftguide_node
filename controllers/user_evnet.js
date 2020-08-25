const express = require("express");
const UserEvent = require("../models/user_envent");

const getUserEventAll = (req, res) => {
  return res.json({ msg: "Get UserEvent All" });
};

const getUserEvent = (req, res) => {
  return res.json({ msg: "Get UserEvent" });
};

const addUserEvent = (req, res) => {
  return res.json({ msg: "Add UserEvent" });
};

const updateUserEvent = (req, res) => {
  return res.json({ msg: "update UserEvent" });
};

const deleteUserEvent = (req, res) => {
  return res.json({ msg: "delete UserEvent" });
};

module.exports = {
  getUserEventAll,
  getUserEvent,
  addUserEvent,
  updateUserEvent,
  deleteUserEvent
};
