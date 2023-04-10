const mongodb = require('mongodb')
var uri = "mongodb://127.0.0.1:27017/test"

var client = null
async function connectDB(){
    client = new mongodb.MongoClient(uri)
    await client.connect()
}
async function getAllDocuments(){
    if(!client)
        await connectDB()
    db = client.db()
    col = db.collection('post')
    cursor = col.find({})
    let  docs = await cursor.toArray()
    return docs
}
async function deleteDocument(_id){
if(!client)
    await connectDB()
_id = mongodb.ObjectId(_id)
db = client.db()
col = db.collection('post')
await col.deleteOne({"_id":_id})
}
async function insertDocument(doc){
    if(!client)
        await connectDB()
    db = client.db()
    col = db.collection('post')
    await col.insertOne(doc)
}
async function updateDocument(uid){
    if(!client)
        await connectDB()
    var db = client.db()
    var col = db.collection('post')
    let post = await col.findOne({'id':uid})
    return post
}
async function updatedDocument(id,post){
    if(!client)
        await connectDB()
    var db = client.db()
    var col = db.collection('post')
    await col.updateOne({id:id},{$set:post})
}

module.exports = {getAllDocuments, deleteDocument ,insertDocument, updateDocument, updatedDocument}