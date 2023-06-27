const express = require("express");
const router = express.Router();
const moviesController = require("..//controllers/moviesController");
const multer = require("../multer/");

//get movies
router.get("/movies", moviesController.getMovies);

//add new movie
router.post("/add-movie", multer.upload, moviesController.addMovie);

module.exports = router;
