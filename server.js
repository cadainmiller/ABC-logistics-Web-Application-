"use strict";

var express = require("express");
var bodyParser = require("body-parser");
const fetch = require("node-fetch");
var routes = require("./routes/index.js");
var port = process.env.PORT || 3000;

var app = express();

app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

routes(app);

app.listen(port, function () {
  console.log("Server listening on port " + port + "...");
});
