const express = require("express");
const router = express.Router();
const education = require("../data/education.json");

router.get("/", (req, res) => {
    res.json(education);
});

router.get("*", (req, res) => {
    res.status(404).json({ message: "not found!" });
});

module.exports = router;

