const express = require("express"); // Access

const app = express(); //Initialized and server ready

app.use(express.static("public"));

app.get("/home",(req,res)=>{
    res.send("Heelo");
    res.end();
})

let port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log("Listening to port" + port);
})