
const palindromeRoutes = require("./palindrome");

const constructorMethod = app => {
  app.use("/", palindromeRoutes);

  app.use("*", (req, res) => {
    res.send(404);
  });
};

module.exports = constructorMethod;