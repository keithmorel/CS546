const express = require("express");
const router = express.Router();
const data = require("../data");
const palindromeChecker = data.palindromeChecker;

router.get("/", (req, res) => {
    res.render("templates/server", {});
});

router.post("/", (req, res) => {
    let phrase = req.body.phrase;
    console.log(phrase);
    const is_palindrome = palindromeChecker.check(phrase);
    res.render("templates/server", {
        phrase: phrase,
        palindromeCheck: is_palindrome
    });
});

module.exports = router;