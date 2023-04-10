const {appendFileSync,readFileSync,writeFileSync} = require('fs')

var data=readFileSync('data.txt')
console.log(data.toString());
writeFileSync('data-1.txt',data)
appendFileSync('data-1.txt','my name is gangadhar',(err,data)=>{
    if(err) throw err;
})