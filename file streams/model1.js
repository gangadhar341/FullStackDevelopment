const mongodb = require('mongodb')
var uri="mongodb://127.0.0.1:27017/test"
async function  DbClient(){
    var client,db,collection,cursor,docs
    try{
        client= new mongodb.MongoClient(uri)
        await client.connect()
        db=client.db()
        collection=db.collection('post')
        cursor=collection.find({})
        docs= await cursor.toArray()
        docs.forEach(doc=>console.log(doc))
    }catch(e){
        console.log(e)

    }
    finally{
        await client.close()
    }
}
DbClient()