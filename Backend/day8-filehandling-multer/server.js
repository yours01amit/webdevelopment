const app = require("./src/app");

let port = 3000;

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
