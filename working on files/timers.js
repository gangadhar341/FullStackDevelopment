const func = (msg) =>{
    console.log(msg);
}
setTimeout(func,2000,'setTimeOut')
setImmediate(func,'setImmidiate')
i=0
timer = setInterval((msg) => {
    console.log(msg)
    i+=1
    if(i==3)
        clearTimeout(timer)
    
},3000,'setInterval')