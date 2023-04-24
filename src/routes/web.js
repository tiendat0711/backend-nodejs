
const express = require('express')
const router = express.Router()

// middleware that is specific to this router

router.get('/', (req, res) => {
    res.send('Hello World! and nodemon')
})

router.get('/ejs', (req, res) => {
    res.render('views.ejs')
})


module.exports = router



