const http = require('http')
const url = require('url')

var server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'})
    if(req.url=='/'){
        res.write("<center><form action='greet'>")
        res.write("<h1 style='color:red'>Registration Form</h1>")
        res.write("Name:<input type='text' name='fname'><br>")
        res.write("<input type='submit' value='Submit'><br>")
        res.end()
    }
    else if(req.url.startsWith('/greet')){
        let urlobject = url.parse(req.url,true)
        let qobject = urlobject.query
        res.write("<h1>Hello,"+qobject.fname+"</h1>")
        res.end()
    }
})

server.listen(3000,() => console.log("server started at http://localhost:3000"));