const express = require('express')
const router = new express.Router()
const fs = require('fs')
const path = require('path')

router.get("/search/:movieName", (req, res) => {
    // Add your implementation here
    console.log(req.params)
    const keyword = req.params.movieName
    console.log(__dirname)
    fs.readFile(`${__dirname}/../movieDescriptions.txt`, 'utf8', function(err, data) {
        if(err) console.log(err)
        console.log(data.split('\n'))
        const descriptions = data.split('\n').map(desc => desc.toLowerCase())
        const matchedDesc = descriptions.find(desc => desc.includes(keyword))
        console.log(matchedDesc)
        const movieName = keyword
        const movieDesc = matchedDesc
        res.render("../views/pages/searchResult", { movieName, movieDesc }) 
    })
});

module.exports = router