const mongodb = require("mongodb");
var uri = "mongodb://127.0.0.1:27017/test";

function DBClient() {
  var client = new mongodb.MongoClient(uri);
  client.connect().then((client) => {
    let db = client.db();
    let col = db.collection("post");
    let cursor = col.find({});
    cursor
      .toArray()
      .then((docs) => {
        docs.forEach((doc) => console.log(doc));
        client.close((err) => console.log("connection closed"));
      })
      .catch((err) => console.log(err.message));
  });
}
DBClient();
