const mongodb = require('mongodb')
var uri = "mongodb://127.0.0.1:27017/test"
 
async function DBConnect(){
    
    try{
        var client = new mongodb.MongoClient(uri)
        await client.connect()
        let db = client.db()
        let col = db.collection('post')
        let cursor = col.find({})
        let docs = await cursor.toArray()
        docs.forEach(doc => {
            console.log(doc);
        });
    }catch(err){
        console.log(err.message)
    }
    finally{
        await client.close()
    }
}
DBConnect()