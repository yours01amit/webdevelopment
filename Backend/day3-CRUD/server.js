const server = require("express");

const app = server();
app.use(server.json());

let port = 3000;

let users = [];

// get - for read
app.get("/", (req, res) => {
  if (users.length === 0) {
    res.send("Server is runnig ,array does not have users please add users")
  } else {
    res.send(users);
  }
});

// post - create
app.post("/create", (req, res) => {
  let data = req.body;
  users.push(data);
  res.send("User create successfully");
});

// put - Update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let {name} = req.body
  
  let userData = users.map((val) =>
    val.id === id ? { ...val, name } : val
  );
  users = userData;

  res.send("User update successfully");
});


// delete - for delete
app.delete("/delete/:id", (req, res) => {
    let {id} = req.params
    let userData = users.filter((val) => val.id !== id) 
    users = userData

    res.send("User deleted succesfully")

})



app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
