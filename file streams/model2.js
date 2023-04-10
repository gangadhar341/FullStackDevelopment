const mongodb=require('mongodb')
var uri="mongodb://127.0.0.1:27017/test"
function DBClient(){
    mongodb.MongoClient.connect(uri,(err,client)=>{
        if(!err){
            let db=client.db()
            let collection=db.collection('post')
            let cursor=collection.find({})
            cursor.toArray((err,docs)=>{
                if(!err){
                    docs.forEach(doc=>console.log(doc))
                    client.close(()=>console.log("closed"))
                }

            })
        }
        else{
            console.log(err.message)
        }
    })
}
DBClient()