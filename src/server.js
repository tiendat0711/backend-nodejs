const express = require('express')
const path = require('path');
const webRoutes = require('./routes/web')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database')


//config template engine
configViewEngine(app);
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


// khai bao route
app.use('/', webRoutes)

//connect database
// create the connection to database

// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})