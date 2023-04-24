const express = require('express')
const path = require('path');
const webRoutes = require('./routes/web')
require('dotenv').config();



const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');

//config template engine
configViewEngine(app);


// khai bao route
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})