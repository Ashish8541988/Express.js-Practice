const express=require("express");
const user=require("./MOCK_DATA.json")
const fs=require("fs");

const app =express();
const PORT=8000


//middleware:- It tell our system which type of data is posting and how to handle it.
app.use(express.urlencoded({extended: false}))

//Routes
app.get("/",(req,res)=>{
    return res.send("this is home page")
})
//how to send json
app.route("/user").get((req,res)=>{
    return res.json(user)
}).post((req,res)=>{
    return res.send("this is post req")
}).patch((req,res)=>{
    return res.send("This is patch req.")
}).delete((req,res)=>{
    return res.send("this is delete req.")
})
//How to send html 
app.get("/user/id",(req,res)=>{
    const html=`
    <ul>
    ${user.map((user)=>`<li>${user.first_name} </li>`).join("")}
    </ul>
`
    return res.send(html)
})
//how to send specific id data
app.get("/user/:id",(req,res)=>{
   
    const id=req.params.id;
    const users=user.find((users)=>users.id==id);

    return res.json(users)
})
//how to post data to server
//here we sending the data and save it to our json file
app.post("/user/id",(req,res)=>{
    const body=req.body;
    console.log(body)
    user.push({...body, id:user.length+1})
    fs.writeFile('./Mock_DATA.json',JSON.stringify(user),(err, data)=>{
    return res.send("Data send sucessfully")
    })
    
})

app.listen(PORT,()=>console.log("server started"))