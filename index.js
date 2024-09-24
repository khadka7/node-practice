const http = require("http");
const express = require("express");

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("Middleware 1")
    next()
})

app.use((req, res, next) => {
    console.log("Conflict in two res.send function so comment this one")
    // res.send("heero");
    next()
})

app.use('/test-route',(req,res,next)=>{
    res.send("<h1>Hello test route</h1>")
})

app.use('/test-route-other',(req,res,next)=>{
    res.send("<h1>Hello test route other </h1>")
})

// const server = http.createServer(app);
// server.listen(port);

app.listen(port)
