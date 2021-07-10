const mongoose = require("mongoose");

const userClickedArticleSchema = new mongoose.Schema({
  img: String,
  title: String,
  description: String,
  publishedAt: String,
  content: String,
});

const UserClickedArticle = mongoose.model(
  "UserClickedArticle",
  userClickedArticleSchema
);

module.exports = UserClickedArticle;
