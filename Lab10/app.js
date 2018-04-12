// We first require our express package
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const uuidv1 = require("uuid/v1");
const _ = require("underscore");

// We create our express isntance:
const app = express();

const expshbs = require('express-handlebars');
const Handlebars = require("handlebars");
const handlebarsInstance = expshbs.create({
  defaultLayout: "main",
  // Specify helpers which are only registered on this instance.
  helpers: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === "number")
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  }
});

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

let userList = [
  {
    "_id": uuidv1(),
    "username": "masterdetective123",
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "profession": "Detective",
    "password": "elementarymydearwatson",
    "hashedPassword": "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD."
  },
  {
    "_id": uuidv1(),
    "username": "lemon",
    "firstName": "Elizabeth",
    "lastName": "Lemon",
    "profession": "Writer",
    "password": "damnyoujackdonaghy",
    "hashedPassword": "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm"
  },
  {
    "_id": uuidv1(),
    "username": "theboywholived",
    "firstName": "Harry",
    "lastName": "Potter",
    "profession": "Student",
    "password": "quidditch",
    "hashedPassword": "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK"
  }
];

// Middlewares:
app.use("/private", (req, res, next) => {
  console.log("User not logged in! Redirecting...");
  if (!req.cookies.AuthCookie) res.status(403).render("templates/noLogin");
  else next();
});

app.get("/", (req, res) => {
  if (req.cookies.AuthCookie) {
    res.redirect("/private");
  }
  res.render("templates/login");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let user = null;
  for (let x = 0; x < userList.length; x++) {
    if (userList[x].username == username) user = userList[x];
  }
  const saltRounds = 16;
  const hash = await bcrypt.hash(password, saltRounds);
  if (user == null) {
    // If the user is not in the list, create it
    const id = uuidv1();
    res.cookie("AuthCookie", id);
      user = {
        "_id": id,
        "username": username,
        "hashedPassword": hash
      };
      userList.push(user);
      // Don't show user's password or hashed password
      user = _.omit(user, 'password', 'hashedPassword');
      res.json(user);
  }
  else {
    const currUserPass = user.password;
    const correctPass = await bcrypt.compare(currUserPass, hash);
    if (correctPass) {
      res.cookie("AuthCookie", user._id);
      user = _.omit(user, 'password', 'hashedPassword');
      res.json(user);
    }
    else {
      res.render("templates/login", { error: "Incorrect password entered!"});
    }
  } 
});

app.get("/private", (req, res) => {
  const sessionID = req.cookies.AuthCookie;
  for (let x = 0; x < userList.length; x++) {
    if (userList[x]._id == sessionID) res.json(_.omit(userList[x], 'password', 'hashedPassword'));
  }
});

app.get("/logout", (req, res) => {
  const anHourAgo = new Date();
  anHourAgo.setHours(anHourAgo.getHours() - 1);
  res.cookie("AuthCookie", { expires: anHourAgo });
  res.clearCookie("AuthCookie");
  res.redirect("/");
});

// We can now navigate to localhost:3000
app.listen(3000, function() {
  console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");
  if (process && process.send) process.send({done: true}); // ADD THIS LINE
});