const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");

const configRoutes = require("./routes");
const expshbs = require('express-handlebars');

app.use("/public", static);
app.use(bodyParser.json());

app.engine('handlebars', expshbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
  console.log("Routes will be running on http://localhost:3000");
});
