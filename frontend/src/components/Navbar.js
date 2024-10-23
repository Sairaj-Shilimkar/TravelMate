import React ,{useContext} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../image/logo.jpeg"
import { Logincontext } from "../context/logincontext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function Navbar({login}){

        const navigate=useNavigate()
        const notifyA=(msg)=>toast.success(msg)

    const loginstatus=()=>{
        const token =localStorage.getItem("jwt")

        if(token || login){
            return[
            <>
            <Link to="/"><li className="nav">Book a Trip</li></Link>
            <Link to="/followingpost"><li className="nav">Buddies' Trips</li></Link>
            <Link to="/makeatrip"><li className="nav">Make a Trip</li></Link>
            <Link to="/profile"><li className="nav">Profile</li></Link>
            <Link to={""}>
               <button className="primaryBtn" onClick={()=>{
                if(window.confirm("Do you really want to log out?")){
                    notifyA("Logged out successfully");
                    navigate("https://travelmate-a4e99.web.app");  
                    localStorage.clear();
                     
                }
               }}>Log Out</button>
            </Link>
            </>
            ] 
        }
        else{
            return[
            <>
            <Link to="https://travelmate-a4e99.web.app"><li className="nav">HOME</li></Link>
            <Link to="/signup"><li className="nav">SignUp</li></Link>
            <Link to="/signin"><li className="nav">Signin</li></Link>
            </>
            ]
        }
    }




    return(
        <div className="navbar">
            <img src={logo} alt="travelmate" />
            <ul className="nav-menu">
                {loginstatus()}
            </ul>
        </div>
    )
}


