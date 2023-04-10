const express = require('express')
const {postrouter} = require('./controller')

var app = express()

app.set('view engine','ejs')
app.use('/',postrouter)



app.listen(3000,(err) => {
    if(!err)
        console.log("http://localhost:3000");
    else
        console.log(err.message);
})