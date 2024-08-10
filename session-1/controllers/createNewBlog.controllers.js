const Blog = require("../model/blog.model");
const createNewBlog = async (req, res) => {
  console.log(req.body);

  const { title, authors, content, publishedAt } = req.body;
  try {
    const newBlog = await Blog.create({ title, authors, content, publishedAt });
    res.send(newBlog);
  } catch (err) {
    res.status(500).send({ message: "Something went Wrong", err });
  }
};

// #######################

const getAllBlogs = async (req, res) => {
  try {
    res.send(await Blog.find({}));
  } catch (err) {
    res.status(500).send({ message: "Something went Wrong", err });
  }
};

// #######################

const getBlogById = async (req, res) => {
  try {
    res.send(await Blog.findById(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Something went Wrong", err });
  }
};

// #######################

const updateBlogById = async (req, res) => {
  try {
    res.send(
      await Blog.findByIdAndUpdate(req.params.id, req.body, {
        returnDocument: "after",
      })
    );
  } catch (err) {
    res.status(500).send({ message: "Something went Wrong", err });
  }
};

// #######################

const deleteBlogById = async (req, res) => {
  try {
    res.send(
      await Blog.findByIdAndDelete(req.params.id, req.body, {
        returnDocument: "after",
      })
    );
  } catch (err) {
    res.status(500).send({ message: "Something went Wrong", err });
  }
};
module.exports = {
  createNewBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
