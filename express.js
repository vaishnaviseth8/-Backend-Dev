const express=require("express");
const app=express();
app.use(express.json());


function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;

    if (auth === "admin123") {
        next(); 
    } else {
        res.status(403).send("403 Access Denied");
    }
}

app.get("/public", (req,res)=>{
    res.send("Public route");
});

app.get("/private",(req,res)=>{
    res.send("Private Route");
});

app.listen(3000,()=>{
    console.log("server running on port 3000");
});        