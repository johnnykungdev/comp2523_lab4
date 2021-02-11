const express = require('express')
const router = new express.Router()

router.get("/myListQueryString", (req, res) => {
    // Add your implementation here
    const query = req.query
    const movies = Object.values(query)
    console.log(movies)
    res.render("../views/pages/index", { movies })
});

module.exports = router