const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
  console.log("Routes will be running on http://localhost:3000");
});
