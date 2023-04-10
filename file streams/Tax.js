const express=require('express')
var app=express()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('TaxForm')
})

app.get('/tax',(req,res)=>{
    var exp=Number(req.query.exp)
    var sal=Number(req.query.sal)
    var da,hra,pf,netSal,t=0.0

    if(exp>5){
        da=0.6*sal
        hra=0.25*sal
        pf=0.1*sal
        netSal=sal+da+hra+pf+10000.0
    }
    else{
        da=0.4*sal
        hra=0.15*sal
        pf=0.1*sal
        netSal=sal+da+hra+pf
    }

    if(netSal>500000){
        t= netSal *0.2 +5000.0
    }
    else if(netSal>400000){
        t= netSal *0.1 +4000.0
    }
    else if(netSal>200000){
        t= netSal * 0.2 
    }
    else if(netSal>100000){
        t= netSal * 0.1
    }
   else{
        t = 0.0
    }
    res.write("tax Payble is : " + t)
    res.end()
})
app.listen(3000,(e)=>{
    console.log("server started at port 3000...");
})