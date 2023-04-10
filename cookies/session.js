const express = require("express");
const cookieSession = require("cookie-session");

var app = express();

app.use(
  cookieSession({
    secret: "Bapayla Engineering College",
    name: "session",
  })
);

app
  .get("/", (req, res) => {
    if (req.session.history == null) {
      res.session.history("history", {
        visits: [new Date().toISOString().slice(0, 20)],
      });
      res.send("Jai pspk");
    } else {
      var history = req.session.history;
      var visitStr = "";
      for (visit of history.visits) {
        visitStr += `<h3>${visit}</h3>`;
      }
      history.visits.push(new Date().toISOString().slice(0, 20));
      res.session("history", history);
      res.send("welcome Back,jai pspk" + visitStr);
    }
  })
  .listen(4000, () => console.log("http://localhost:4000"));
