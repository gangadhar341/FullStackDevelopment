const obj={name:'gangadhar','regdno':405}
var str=JSON.stringify(obj)
console.log(str);

var str1="{name:'gangadhar','regdno':405}"
var obj1=JSON.parse(str1)
console.log(obj1.name)