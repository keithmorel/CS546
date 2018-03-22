const path = require('path');

const constructorMethod = app => {

  app.get("/", (req, res) => {
    let route = path.resolve(`static/index.html`);
    res.sendFile(route);
  });

  app.post("/result", (req, res) => {
    // Check if input is palindrome
    // Use handlebars to post HTML?
    res.status(200).send();
  });

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;