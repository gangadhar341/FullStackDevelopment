const express = require('express')
//const url = require('url')

var app = express()
//app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',(req,res) => {
    res.render('display')
})
app.get('/display',(req,res) => {
    res.render('result.ejs',{cname:req.query.fname})
    res.end()
})
app.listen(3000,() => console.log("server started at port http://localhost:3000"))