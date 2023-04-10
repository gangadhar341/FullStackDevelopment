const express = require("express");
const mongodb = require("mongodb");

var app = express();
app.set("view engine", "ejs");
var uri = "mongodb://127.0.0.1:27017/test";
var client = null;
async function DB() {
  client = new mongodb.MongoClient(uri);
  await client.connect();
}
app.get("/", async (req, res) => {
  if (!client) await DB();
  let db = client.db();
  let col = db.collection("post");
  let cursor = col.find({});
  let docs = await cursor.toArray();
  res.render("displayCrud", { post: docs });
  client.close();
  client = null;
});
app.get("/delete", async (req, res) => {
  if (!client) await DB();
  let _id = mongodb.ObjectId(req.query._id);
  let db = client.db();
  let col = db.collection("post");
  await col.deleteOne({ _id: _id });
  res.redirect("/");
});
app.get("/update", async (req, res) => {
  if (!client) await DB();
  _id = mongodb.ObjectId(req.query._id);
  db = client.db();
  col = db.collection("post");
  let post = await col.findOne({ _id: _id });
  res.render("update", { doc: post });
});
app.get("/updated", async (req, res) => {
  if (!client) await DB();
  //upid = Number(req.query.id)
  _id = mongodb.ObjectId(req.query._id);
  let post = {
    id: req.query.id,
    userId: req.query.usid,
    title: req.query.title,
    body: req.query.body,
  };
  db = client.db();
  col = db.collection("post");
  await col.updateOne({ _id: _id }, { $set: post });
  res.redirect("/");
});
app.get("/insert", (req, res) => {
  res.render("insert");
});
app.get("/inserted", async (req, res) => {
  if (!client) await DB();
  id = Number(req.query.id);
  usid = Number(req.query.usid);
  title = req.query.title;
  body = req.query.body;
  db = client.db();
  col = db.collection("post");
  await col.insertOne({ id: id, UserId: usid, title: title, body: body });
  res.redirect("/");
});
app.listen(3000, () => console.log("port http://localhost:3000"));
