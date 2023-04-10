const {readFileSync,writeFileSync} = require('fs')
const data=readFileSync('data.txt')
writeFileSync('data-copy.txt',data.toString())
console.log(data.toString());