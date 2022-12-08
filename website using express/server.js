const ejs = require('ejs')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/", function (req, res) {
  res.render("example");
});

app.get("/example1", function (req, res) {
  res.render("example1");
});

app.get("/example1/examplea", function (req, res) {
  res.render("examplea");
});

app.get("/example2", function (req, res) {
  res.render("example2");
});



app.listen(3000)