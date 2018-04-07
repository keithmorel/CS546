const express = require("express");
const router = express.Router();
// const data = require("../data");
// const palindromeChecker = data.palindromeChecker;

router.get("/", (req, res) => {
    res.render("templates/server", {});
});

module.exports = router;