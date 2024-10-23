import React,{useState,useContext} from "react";
import "./Signin.css";
import logo from "../image/logo.jpeg"
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Logincontext } from "../context/logincontext";


export default function Signin(){
    const {setUserLogin}=useContext(Logincontext)
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password,setpassword]= useState("");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const notifyA =(msg)=>toast.error(msg)
    const notifyB=(msg)=>toast.success(msg)


    const postData=()=>{

        //checking email
        if(!emailRegex.test(email)){
            notifyA("Invalid Email")
            return
        }

        //sending data to server
        fetch("http://localhost:5000/signin",{
            method:"post" , 
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                notifyA(data.error)
            }
            else{
                notifyB("Signed in Successfully")
                console.log(data)
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                setUserLogin(true)
                navigate("/")
            }
            
            console.log(data)
        })
    }


    return(
        <div className="signIn">
            <div>
                <div className="loginform">
                    <img src={logo} alt="Travelmate" />
                    <div>
                    <div><input type="email" name="email" id="email"  value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} /></div>

                    <div><input type="password" name="password" id="password" placeholder="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}  /></div>

                    <input type="submit" id="submit-btn" value="SignIn"  onClick={()=>{postData()}}  />

                    </div>
                </div>
                <div className="loginform2">
                    Don't have an account?
                    <a href="/SignUp"><span id="signup"> Sign Up </span></a>
                </div>
            </div>
        </div>
    )
}