const ejs = require('ejs')
const express = require('express')
const bodyParser = require('body-parser')

const router=require('./router')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/route', router)

app.get("/", function (req, res) {
  res.render("user");
}).listen(7000 , () => {
  console.log("Listening on port http://127.0.0.1:7000/")
})