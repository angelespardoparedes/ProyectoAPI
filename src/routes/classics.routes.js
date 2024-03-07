const express = require("express");
const classicsRoutes = express.Router();
const { createClassic } = require("../controllers/classics.controller");

classicsRoutes.get("/", (req, res, next) =>
  res.status(200).json({
    status: 200,
    message: "Welcome to my server",
    app: "myapp",
  })
);
classicsRoutes.post("/", (req, res, next) =>
  res.status(200).json({
    status: 200,
    message: "Welcome to my server",
    app: "myapp",
  })
);
module.exports = classicsRoutes;
