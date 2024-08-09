const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
});

module.exports = blogSchema;

// const mongoose = require('mongoose')

// const blogSchema = mongoose.Schema({
//     title: String,
//     authors: [String],
//     content: String,
//     publishedAt: Date,
// })
// module.exports = blogSchema;
