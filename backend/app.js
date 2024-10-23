const express =require("express");
const app=express();
const port=5000;
const mongoose = require("mongoose");
const {mongoUrl}=require("./keys");
const cors=require("cors");
const{jwt_secret}=require("./keys")


app.use(cors());

require('./models/model');
require("./models/post")

app.use(express.json())
app.use(require("./routes/makeatrip"))
app.use(require("./routes/auth"))
app.use(require("./routes/user"))


mongoose.connect(mongoUrl);





mongoose.connection.on("connected",()=>{
    console.log("coonected to mongo");
})

mongoose.connection.on("error",()=>{
    console.log("not coonected to mongo");
})

app.get('/',(req,res)=>
{
    res.json("ohh yeaaahhhhh")
})
app.listen(port,()=>{
    console.log(port)
})