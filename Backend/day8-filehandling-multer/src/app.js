const server = require("express");
const fileRoute = require("./routes/file.route");

const app = server();

app.use(server.json());

app.get("/", (req, res) => {
  res.send("okk bro i'm in.....");
});

app.use("/file", fileRoute);

module.exports = app;
