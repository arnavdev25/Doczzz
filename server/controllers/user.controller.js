const express = require("express");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports.createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(404)
      .json({ error: "Please fill all the fields properly" });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(404).json({ error: "User already exists" });
      }
      bcrypt.hash(password, saltRounds).then((hashpass) => {
        const u = new User({ ...req.body, password: hashpass });
        u.save()
          .then((r) => {
            return res.json(r);
          })
          .catch((e) => next(e));
      });
    })
    .catch((e) => next(e));
};
module.exports.logInUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({ error: "Please fill the details properly" });
  }
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(404).json({ error: "Invalid email or passsword" });
    }
    bcrypt
      .compare(password, user.password)
      .then((r) => {
        if (r) {
          const { _id, firstName, lastName, email, password, phone, role } =
            user;
          const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
          return res.json({
            token,
            user: { _id, firstName, lastName, email, password, phone, role },
          });
        } else {
          return res.status(404).json({ error: "Invalid password" });
        }
      })
      .catch((e) => next(e));
  });
};
