import React ,{useEffect,useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import './SignUp.css';
import logo from "../image/logo.jpeg"
import {toast } from 'react-toastify';


export default function SignUp(){
    const navigate= useNavigate();
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [userName,setUserName]= useState("");
    const [aadhar,setaadhar]= useState("");
    const [password,setpassword]= useState("");

    //toast functions
    const notifyA =(msg)=>toast.error(msg)
    const notifyB=(msg)=>toast.success(msg)


    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const aadharRegex=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;


    const postData=()=>{

        //checking email
        if(!emailRegex.test(email)){
            notifyA("Invalid Email")
            return
        }
        else if(!passwordRegex.test(password)){
            notifyA("Password must contain atleast 8 characters , including atleast 1 number and 1 special character and both uppercase and lowercase letters")
            return
        }
        else if(!aadharRegex.test(aadhar)){
            notifyA("Enter valid aadhar number")
            return
        }


        //sending data to server
        fetch("http://localhost:5000/signup",{
            method:"post" , 
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                userName:userName,
                aadhar:aadhar,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                notifyA(data.error)
            }
            else{
                notifyB("Registered Successfully")
                navigate("/signin")
            }
            
            console.log(data)
        })
    }



    return(
        <div className="signUp">
            <div className="form-container">
            <div className="form">
                <img  className="signuplogo" src={logo} alt="travelmate" />

                <p className="loginPara">The world is wide,get a TravelMate by your side!!!<br/>Sign Up to explore new adventures</p>

                <div><input type="email" name="email" id="email"  value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} /></div>

                <div><input type="text" name="name" id="name" value={name} placeholder="Full Name" onChange={((e)=>
                    {setName(e.target.value)})} /></div>

                <div><input type="text" name="username" id="username" placeholder="username" value={userName}  onChange={(e)=>{setUserName(e.target.value)}} /></div>

             <div><input type="text" id="Aadhar" name='aadhar' pattern="[0-9]{12}" placeholder="Enter valid 12 digit Aadhar number"  value={aadhar} onChange={(e)=>{setaadhar(e.target.value)}}  /></div>
              
                <div><input type="password" name="password" id="password" placeholder="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}  /></div>

                <p className="loginpara">By Signing Up, you agree to our Terms,<br />privacy policy and cookies policy</p>

                <input type="submit" id="submit-btn" value="Sign Up"  onClick={()=>{postData()}}  />
            </div>
            <div className="form2">
                Already have an account?
                <a href="/SignIn"><span id="signin"> SignIn</span></a>
            </div>
            </div>
        </div>
    )
}