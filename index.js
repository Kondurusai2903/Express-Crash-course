const express = require("express");
// const path = require("path");
// const userposts = require("./routers/posts");
// const logger = require("./middleware/logger");
const blogRouter = require("./routers/blog.router");
const app = express();
const PORT = 3001;
const connectDB = require("./db/config");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// setup static folder;
app.use(express.static(path.join(__dirname, "public")));
// app.use("/blogs", blogRouter);

app.listen(PORT, () => console.log(`Server is listening....${PORT}`));

// --------------body parser middleware
// app.use(logger);
// app.use("/api/posts", userposts);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });
