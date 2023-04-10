var express = require("express");
var basicAuth = require("basic-auth");

var app = express();

var auth = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set("WWW-Authenticate", 'Basic realm = "Authorization"');
    res.send(401);
    return;
  } else if (user.name === "pspk" && user.pass === "fan") {
    next();
  } else {
    res.set("WWW-Authenticate", 'Basic realm = "Authorization required"');
    res.send(401);
    return;
  }
};
app
  .get("/auth", auth, function (req, res) {
    res.send("welcome fan of pspk");
  })
  .listen(2000, () => console.log("http://localhost:2000"));
