const {posts} = require('./posts.js')

async function getAllDocuments(){
    return posts
}
async function insertDocument(post){
    posts.push(post)
}
async function deleteDocument(id){
    await posts.splice(id,1)
}
async function getDocument(id){
    return posts[id]
}
async function updateDocument(idx,post){
    //posts[idx-1] = post
    //console.log(idx);
    let unid;
    for(let i=0; posts.length; i++){
        if(posts[i]['id'] == idx){
            unid = i
            break
        }
    }
    posts[unid] = post
}

module.exports = {getAllDocuments, insertDocument, deleteDocument, getDocument, updateDocument}