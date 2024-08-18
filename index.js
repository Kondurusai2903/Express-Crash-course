const express = require("express");
const app = express();
const connectDB = require("./db/config");
const PORT = 5000;
const blogRouter = require("./routes/blog.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use("/blogs", blogRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
