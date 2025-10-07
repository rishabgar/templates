const express = require("express");
const { indexController } = require("../controllers/index.js");

const route = express.Router();

route.get("/", indexController);

module.exports = route;
