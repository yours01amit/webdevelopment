const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const server = require("express");
const connectDB = require("./config/db");
const NotesModel = require("./models/note.model");

const app = server();
app.use(server.json());
connectDB();

app.get("/", (req, res) => {
  res.send("the server is running on....");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  const newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note created successfully",
    data: newNote,
  });
});

module.exports = app;
