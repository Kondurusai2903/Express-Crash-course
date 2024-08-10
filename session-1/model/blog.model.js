const mongoose = require("mongoose");
const blogSchema = require("../schema/blog.schema");
const blogModel = mongoose.model("Blog", blogSchema, "blogs");

module.exports = blogModel;

// const mongoose = require("mongoose");

// const blogSchema = require("../schema/blog.schema");

// const blogModel = mongoose.model("Blog", blogSchema, "blogs");
// module.exports = blogModel;
