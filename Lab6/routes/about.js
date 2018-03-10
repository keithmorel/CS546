const express = require("express");
const router = express.Router();
const about = require("../data/about.json");

router.get("/", (req, res) => {
    res.json(about);
});

router.get("*", (req, res) => {
    res.status(404).json({ message: "not found!" });
});

module.exports = router;

