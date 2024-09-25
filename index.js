const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

//routes
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user');

const path = require('path')
const rootDir = require('./utils/path')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())


app.use('/admin',adminRoutes)
app.use(userRoutes)

//create 404 page
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
    // res.status(400).send("<h1>Page not found </h1>")
})


// const server = http.createServer(app);
// server.listen(port);
app.listen(port)
