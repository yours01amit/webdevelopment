const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173"
}))

connectDB();

app.get("/", (req, res) => {
  res.send("okk bro done");
});

app.use("/notes", notesRoute);


module.exports = app;
