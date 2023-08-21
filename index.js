import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    console.log(req.headers);
    res.send("<h1>hello world<h1>");
});

app.listen(port,()=>{
    console.log(`listening in port ${port}`);
});