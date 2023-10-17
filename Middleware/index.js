const express=require("express");
const app=express();
const fs=require("fs");
const Port=8000;

//middlewrae creation
app.use((req,res,next)=>{
    fs.appendFile('message.txt',`\n This req is catch at ${Date.now()}: ${req.method}`,(err)=>{
        console.log("middleware");
        next()
    })
})
//# Headears---------------------------------------------------------------------------------------
//syntax of headers--------------------------------------------------------------------------------

app.use((req,res,next)=>{
    
    fs.appendFile('message.txt',`\n this is middleware and this req is is get at ${Date.now()}`,(err)=>{
        console.log("This is middleware 2");
        next()
    })
})

app.get("/",(req,res)=>{
    res.setHeader("X-Myheader","Ashish");
    res.status(201).send("Homepage");
})

app.get("/user",(req,res)=>{
res.send("User")
})



app.listen(Port,(err)=>{
console.log("server started")
})











