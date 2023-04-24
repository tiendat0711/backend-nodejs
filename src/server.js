const express = require('express')
const path = require('path')
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ejs', (req, res) => {
    res.render('views.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})