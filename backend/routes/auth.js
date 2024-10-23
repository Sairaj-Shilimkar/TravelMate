const express = require("express");
const router =express.Router();
const mongoose=require("mongoose")
const USER= mongoose.model("USER")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../keys");
const requireLogin = require("../middlewares/requireLogin");





router.get('/',(req,res)=>{
    res.send("Running server for travelmate")
})

router.post("/signup",(req,res)=>{
    const {name,userName,email,aadhar,password}=req.body;

    if(!name || !userName || !aadhar || !email || !password){
       return res.status(422).json({error:"Please add all the fields"})
    }

    USER.findOne({$or:[{email:email},{userName:userName},{aadhar:aadhar}]}).then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error:"user already exist"})
        }

        bcrypt.hash(password,12).then((hashedpassword)=>{
            const user = new USER({
                name,
                email,
                aadhar,
                userName,
                password: hashedpassword
            })
        
            user.save()
            .then(user=> {res.json({message:"Registered successfully"})})
            .catch(err => {console.log(err)})
        })

       
    
    })

 
})

router.post("/signin",(req,res)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return res.status(422).json({error:"Please add email and password"})
    }
    USER.findOne({email:email}).then((saveduser)=>{
        if(!saveduser){
            return res.status(422).json({error:"Invalid email"})
        }
 
        bcrypt.compare(password,saveduser.password).then((match)=>{
            if(match){
               // return res.status(200).json({message:"Signed in Successfully"})//
               const token =jwt.sign({_id:saveduser.id},jwt_secret)
               const {_id,name,email,userName}=saveduser
               res.json({token,user:{_id,name,email,userName}})
               console.log(token)
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(err=>console.log(err))

    })
})




module.exports = router;