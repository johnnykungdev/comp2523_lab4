/*
 Authors:
 Your name and student #:
 Your Partner's Name and student #:
 (Make sure you also specify on the Google Doc)
*/
const express = require("express");
const bodyParser = require('body-parser')
//router
const myFormRouter = require('./routers/myForm.router')
const queryRouter = require('./routers/query.router')
const searchMovieRouter = require('./routers/searchMovie.router')

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//https://jk-software-learning.com/
app.get("/", (req, res) => res.render("pages/index"));

app.use(myFormRouter)
app.use(queryRouter)
app.use(searchMovieRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});