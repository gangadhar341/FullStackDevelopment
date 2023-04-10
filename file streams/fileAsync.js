const {readFile,writeFile}=require('fs')
readFile('data.txt',(err,data)=>{
    if(!err){
        console.log(data.toString());
        writeFile('data-2.txt',data,()=>{
            console.log('copied');
        })
    }
    else{

        console.log(err);
    }

})