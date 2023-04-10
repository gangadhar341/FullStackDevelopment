const express = require('express')
const {getAllDocuments,deleteDocument, insertDocument, updateDocument,updatedDocument} = require('./model')
const postrouter = express.Router()

postrouter.get('/',async(req,res) => {
    let docs = await getAllDocuments()
    res.render('display',{'post':docs})
    res.end()
})
postrouter.get('/delete/:_id',async(req,res) => {
    var _id = req.params._id
    await deleteDocument(_id)
    res.redirect('/')
    res.end()
})
postrouter.get('/insert',async(req,res) => {
    res.render('insert')
})
postrouter.get('/inserted',async(req,res) => {
    let doc = {
        "id":req.query.id,
        "userId":req.query.uid,
        "title":req.query.t,
        "body":req.query.b
    }
    await insertDocument(doc)
    res.redirect('/')
    res.end()
})
postrouter.get('/update',async(req,res) => {
    var id = Number(req.query.id)
    let post = await updateDocument(id)
    res.render('update.ejs',{'docs':post})
    res.end()
})
postrouter.get('/updated',async(req,res) => {
    var id = Number(req.query.id)
    let post ={
        'userId':Number(req.query.uid),
        'id':Number(req.query.id),
        'title':req.query.title,
        'body':req.query.body
    }
    await updatedDocument(id,post)
    res.redirect('/')
    res.end()
})

module.exports = {postrouter}