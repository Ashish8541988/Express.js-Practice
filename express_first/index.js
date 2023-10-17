const express=require("express")


const app=express();

app.get("/",(req,res)=>{
    return res.send("Hello this is home page")
})


app.get("/about",(req,res)=>{
    return res.send("Hello this is about page")
})
app.get("/contact",(req,res)=>{
    return res.send("Hello this is contact page")
})

app.listen(800,()=>console.log("Server Started"))