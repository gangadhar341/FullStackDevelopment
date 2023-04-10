const express=require('express')
const url=require('url')
const app=express()
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('viewForm.ejs')
})
app.post('/view',(req,res)=>{
    //var cname=req.body.cname
    res.render('result.ejs',{cname:req.body.cname})
    res.end()
})
app.listen(3000,(e)=> console.log('Server started at port 3000...'))