const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://emmysingh019_db_user:amitkumar@cluster0.vjjzlpz.mongodb.net/",
    );
    console.log("db connected");
  } catch (error) {
    console.log("error in db", error);
  }
};

module.exports = connectDB;
