const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("mongoDB connected")
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDB;
