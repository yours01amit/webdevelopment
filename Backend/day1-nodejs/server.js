const { log } = require("console");
let http = require("http");

let server = http.createServer((req, res) => {
    console.log("i am server");
    res.end("i am ended")
    
})

server.listen((4000), ()=>{
    console.log("i am listening");
})