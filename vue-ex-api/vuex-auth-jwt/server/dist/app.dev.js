"use strict";

var express = require("express");

var DB = require("./db");

var config = require("./config");

var bcrypt = require("bcryptjs");

var jwt = require("./jsonwebtoken");

var bodyParser = require("body-parser");

var db = new DB("sqlitedb");
var app = express();
var router = express.Router();
router.use(bodyParser.urlencoded({
  extended: false
}));
router.use(bodyParser.json()); // CORS middleware

var enableCrossDomain = function enableCrossDomain(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(enableCrossDomain);
router.post("/register", function (req, res) {
  db.insert([req.body.name, req.body.email, bcrypt.hashSync(req.body.password, 8)], function (err) {
    if (err) {
      return res.status(500).send("There are a problem registering the user.");
    }

    db.selectByEmail(req.body.email, function (err, user) {
      if (err) {
        return res.status(500).send("There was problem getting user");
      }
    });
  });
});