const express = require('express')
const router = new express.Router()

router.get("/myForm", (req, res) => {
    console.log('receive get form request')
    res.render("pages/myForm")
});

router.post("/myForm", (req, res) => {
  // Add your implementation here
  console.log(req.body)
  const movies = req.body.movies.split(',')
  console.log(movies)
  res.render("../views/pages/index", { movies })
});

module.exports = router