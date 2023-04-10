const mongodb = require('mongodb')
var uri = "mongodb://127.0.0.1:27017/test"

function DBConnect(){
    mongodb.MongoClient.connect(uri,(err,client) => {
        if(!err){
            let db = client.db()
            let col = db.collection('post')
            let cursor = col.find({})
            cursor.toArray((err,docs) => {
                docs.forEach(doc => console.log(doc))
                client.close((err) => console.log('connection closed'))
            })
        }
        else
            console.log(err.message)
    })
}
DBConnect()