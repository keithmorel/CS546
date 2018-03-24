const path = require('path');

const constructorMethod = app => {

  app.get("/", (req, res) => {
    res.render('templates/form', { Title: "The Best Palindrome Checker in the World!" });
  });

  app.post("/result", (req, res) => {

    // If no input is provided
    if (req.body['text-to-test'] == '') {
      res.status(400).render('templates/error', { Title: "Error" });
    }

    // Get the palindrome to test from the form
    let to_check = req.body['text-to-test'];
    let is_palindrome = false;
    let is_not_palindrome = false;
    // Remove excess punctuation
    let no_punc = to_check.toLowerCase().replace(/[^a-z]/g, '').replace(/\s+/g, '').trim();
    if (no_punc == no_punc.split('').reverse().join('')) {
      is_palindrome = true;
    }
    else {
      is_not_palindrome = true;
    }

    res.render('templates/result', 
      { Title: "The Palindrome Results!", is_palindrome: is_palindrome, is_not_palindrome: is_not_palindrome, to_check: to_check });
  });

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;