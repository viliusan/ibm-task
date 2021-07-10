const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

const UserSearchQuery = require("./models/userSearchQuery");
const UserClickedArticle = require("./models/userClickedArticle");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded());

const port = 9999;

mongoose
  .connect("mongodb://localhost:27017/userActions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR!");
    console.log(err);
  });

app.post("/clickedArticle", async (req, res) => {
  console.log(req.body);
  const newClickedArticle = new UserClickedArticle(req.body.articleDetails);
  await newClickedArticle.save();
});

app.post("/userActions", async (req, res) => {
  console.log(req.body);
  const newUserSearch = new UserSearchQuery(req.body.action);
  await newUserSearch.save();
  return "";
});

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
