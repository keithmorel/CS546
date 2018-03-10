const express = require("express");
const router = express.Router();
const story = require("../data/story.json");

router.get("/", (req, res) => {
    res.json(story);
});

router.get("*", (req, res) => {
    res.status(404).json({ message: "not found!" });
});

module.exports = router;

