const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())

app.use('/add-form', (req, res, next) => {
    res.send("<form action='/submit-form' method='POST'><input type='text' name='name'><button type='submit'>submit</button></form>")
})


// app.use('/submit-form', (req, res, next) => {
//     console.log("body",req.body) //gives undefined without  without parserr
//     res.redirect('/')
// })

app.post('/submit-form', (req, res, next) => {
    console.log("body",req.body) //gives undefined without  without parserr
    res.redirect('/')
})

app.get('/test-route',(req,res,next)=>{
    res.send("<h2>Testing Get Method</h2>")
})







app.use('/', (req, res, next) => {
    res.send("<h1>Hello</h1><p>Parse Request</p>")
})



// const server = http.createServer(app);
// server.listen(port);
app.listen(port)
