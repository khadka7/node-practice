const express = require('express')
const router = express.Router()

router.get('/test-route-other',(req,res,next)=>{
    res.send("<h1>Hello test route other </h1>")
})

//make sure this base url is call at bottom else ordering might cause routing problem
router.get('/', (req, res, next) => {
    res.send("<h1>Hello</h1><p>Route</p>")
})

module.exports = router