const express = require("express");
const router = express.Router();
// const router = express.Router();
const {
  createNewBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controllers/createNewBlog.controllers");
console.log("router level is seeing");
router.get("/", getAllBlogs);
router.post("/new", createNewBlog);
// when we have same path and different http request
// clubbling routes using route function

router
  .route("/:id")
  .get(getBlogById)
  .patch(updateBlogById)
  .delete(deleteBlogById);

// router.get("/blogs/:id", getBlogById);
// router.patch("/blogs/:id", updateBlogById);
// router.delete("/blogs/:id", deleteBlogById);

module.exports = router;
