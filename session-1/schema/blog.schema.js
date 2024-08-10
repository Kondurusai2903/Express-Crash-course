const mongoose = require("mongoose");
const validator = require("validator");
const authorSchema = new mongoose.Schema(
  {
    name: { type: String, maxLength: 25 },
    twitterId: { type: String, maxLength: 50 },
    email: {
      type: String,
      maxLength: 50,
      validate: {
        validator: (value) => {
          validator.isEmail(value);
        },
      },
    },
    image: { type: String },
  },
  {
    _id: false,
  }
);
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: [true, "A blog with this 'title' already exists"],
    case: false,
    required: [true, "title is a required field"],
  },
  authors: [authorSchema],
  content: { type: String, default: "" },
  publishedAt: Date,
});

module.exports = blogSchema;

// const mongoose = require("mongoose");

// const blogSchema = mongoose.Schema({
//   title: String,
//   authors: [String],
//   content: String,
//   publishedAt: Date,
// });

// module.exports = blogSchema;
// const mongoose = require('mongoose')

// const blogSchema = mongoose.Schema({
//     title: String,
//     authors: [String],
//     content: String,
//     publishedAt: Date,
// })
// module.exports = blogSchema;
