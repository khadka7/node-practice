const express = require('express')
const router = express.Router();

//register paths
router.get('/add-form', (req, res, next) => {
    res.send("<form action='/admin/submit-form' method='POST'><input type='text' name='name'><button type='submit'>submit</button></form>")
})


router.post('/submit-form', (req, res, next) => {
    console.log("body",req.body) //gives undefined without  without parserr
    res.redirect('/')
})
module.exports = router