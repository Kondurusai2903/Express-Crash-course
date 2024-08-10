const express = require("express");
const router = express.Router();
let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
  {
    id: 4,
    title: "Post Four",
  },
];
// --------------middleware logger at router level or app level this one is of router level
// const logger = (req, res, next) => {
//   console.log(
//     `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
//   );
//   next();
// };
// ------------get the api response using get method
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0 && limit < 100) {
    res.send(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let post = posts.find((item) => item.id === id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: `The obj is not found with this ${id}` });
  }
});
// -------------post the data to api using post method
router.post("/", (req, res) => {
  let newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  console.log(newPost);
  if (!newPost.title) {
    return res.status(400).json({ message: "Please Include a Title" });
  }
  posts.push(newPost);
  res.status(200).json(posts);
});
// ---------update the api using a put or patch methods;
router.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  console.log(id, "this is id ");
  let post = posts.find((item) => item.id == id);
  if (!post) {
    return res
      .status(400)
      .send({ message: `The Item with  ID ${id} Not found` });
  }
  post.title = req.body.title;
  console.log(posts);
  res.status(200).send(posts);
});
router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  console.log(id, "this is id ");
  let post = posts.find((item) => item.id == id);
  if (!post) {
    return res
      .status(400)
      .send({ message: `The Item with  ID ${id} Not found` });
  }
  posts = posts.filter((item) => item.id !== id);
  res.status(200).send(posts);
});
// --------------Delete the api using the
module.exports = router;
