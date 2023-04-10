const express = require("express");
const cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser("pspk"));
app
  .get("/", (req, res) => {
    if (req.cookies.history == null) {
      res.cookie("history", {
        visits: [new Date().toISOString().slice(0, 20)],
      });
      res.send("Jai pspk");
    } else {
      var history = req.cookies.history;
      var visitStr = "";
      for (visit of history.visits) {
        visitStr += `<h3>${visit}</h3>`;
      }
      history.visits.push(new Date().toISOString().slice(0, 20));
      res.cookie("history", history);
      res.send("welcome Back,jai pspk" + visitStr);
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
