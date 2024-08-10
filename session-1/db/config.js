const mongoose = require("mongoose");
const MONGODB_URL = "mongodb://127.0.0.0.27017";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect ");
  }
};
module.exports = connectDB;

// const mongoose = require("mongoose");
// const MONGODB_URL = "mongodb://127.0.0.1:27017";

// const connetDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log("DB connected");
//   } catch (err) {
//     console.log("Could not connect");
//   }
// };
// module.exports = connetDB;

// const mongoose = require("mongoose");
// const MONGODB_URL = "mongodb://127.0.0.0.27017";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log("DB connected");
//   } catch (err) {
//     console.log("could not connect error");
//   }
// };
// module.exports = connectDB;
