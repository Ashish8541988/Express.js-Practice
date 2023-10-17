const http=require("http");
const fs=require("fs")

const MyServer=http.createServer((req,res)=>{
    // console.log(req)
    // console.log("req recived")
    // res.end("Server Started")
    log=`${Date.now()}: ${req.url} req recived\n`;
    fs.appendFile("file.txt",log,(err,data)=>{
        // res.end("Hello from server")
        switch (req.url) {
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("About");
                break;
            default:
                res.end("404")
                break;
        }
})
})


MyServer.listen(8000,()=>console.log("Server Started"))