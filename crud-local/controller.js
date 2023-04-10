const express = require('express')
//const posts = require('./posts')
const {getAllDocuments, insertDocument, deleteDocument, getDocument, updateDocument} = require('./model')

var postrouter = express.Router()
var idx;
postrouter.get('/',async(req,res) => {
    let docs = await getAllDocuments()
    res.render('display',{'posts':docs})
    res.end()
})
postrouter.get('/insert',async(req,res) => {
    res.render('insert')
})
postrouter.get('/inserted',async(req,res) => {
    let post = {
        'id':req.query.id,
        'userId':req.query.uid,
        'title':req.query.title,
        'body':req.query.body
    }
    await insertDocument(post)
    res.redirect('/')
})
postrouter.get('/delete/:id',async(req,res) => {
    let id = req.params.id;
    await deleteDocument(id)
    res.redirect('/')
})
postrouter.get('/update',async(req,res) => {
    let idx = req.query.idx;
    let post = await getDocument(idx)
    //console.log(post);
    res.render('update',{'docs':post})
    res.end()
})
postrouter.get('/updated',async(req,res) => {
    let idx = req.query.idx;
    //console.log(idx);
    let post = {
        'id':req.query.id,
        'userId':req.query.uid,
        'title':req.query.title,
        'body':req.query.body
    }
    await updateDocument(idx,post)
    res.redirect('/')
})

module.exports = {postrouter}