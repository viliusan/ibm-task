const mongoose = require("mongoose");

const userSearchQuerySchema = new mongoose.Schema({
  searchQuery: String,
});

const UserSearchQuery = mongoose.model(
  "UserSearchQuery",
  userSearchQuerySchema
);

module.exports = UserSearchQuery;
