const express = require("express");
const tracksRoutes = express.Router();
const {
  getTrack,
  getTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/classics.controller");

tracksRoutes.get("/:id", getTrack);
tracksRoutes.get("/", getTracks);
tracksRoutes.post("/", createTrack);
tracksRoutes.patch("/:id", updateTrack);
tracksRoutes.delete("/:id", deleteTrack);

module.exports = tracksRoutes;
