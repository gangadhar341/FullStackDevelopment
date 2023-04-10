const {open,read,write} = require('fs')
var buf = Buffer.alloc(10)

function writeData(fd1,fd2){
    read(fd1,buf,null,10,null,(e,n,buf) => {
        if(n>0){
            console.log(buf.toString());
            write(fd2,buf,null,10,null,(e,w,buf) => {
                writeData(fd1,fd2)
            })
        }
    })
}

open('data.txt','r',(err,fd1) => {
    if(!err)
        open('data1-txt','w',(e,fd2) => {
            if(!e)
                writeData(fd1,fd2)
        })
})