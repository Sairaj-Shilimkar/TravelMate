import React,{useState,useEffect} from "react";
import "./makeatrip.css"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




export default function Makeatrip(){

    const[body,setbody]=useState("");
    const[price,setprice]=useState("")
    const[image,setImage]=useState("");
    const[url,seturl]=useState("")

    const notifyA =(msg)=>toast.error(msg)
    const notifyB=(msg)=>toast.success(msg)
    const navigate=useNavigate()


    useEffect(()=>{

        if(url){
            fetch("http://localhost:5000/makeatrip",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    body,
                    pic:url,
                    price
                })
            }).then(res=>res.json())
            .then(data =>{if(data.error){
                notifyA(data.error)
            }else{
                notifyB("Successfully Posted")
                navigate("/")
            }})
            .catch(err=>console.log(err))
        }
    },[url])


    const postdetails =()=>{

        console.log(body,image,price);
        const data=new FormData();
        data.append("file",image)
        data.append("upload_preset","travelmate")
        data.append("cloud_name","sairajshilimkar")
        fetch("https://api.cloudinary.com/v1_1/sairajshilimkar/image/upload",
        {
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>seturl(data.url))
        .catch(err=> console.log(err))
    }


    const loadfile = (event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
        }
     }

    return(
        <div className="createpost">
            <div className="postheader">
                <h4 style={{margin:"6px auto"}}>Plan a Trip By Yourself...</h4>
                <button id="post-btn" onClick={()=>{
                    postdetails()}} >Find Buddies</button>
            </div>

            <div className="maindiv">
                <img id="output" src="https://th.bing.com/th?id=OIP.ZnVOxTimUNfwBYqS36h8LAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
                <input type="file" accept="image/*" 
                    onChange={(event)=>{
                        loadfile(event)
                        setImage(event.target.files[0])
                        }}/>
            </div>

            <div className="details">
                <div className="cardheader">
                    <div className="cardpic">
                        {/*<img src="data:image/jpeg;base64,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" alt="not found" />*/}
                    </div>
                    {/*<h5>iamsai234</h5>*/}
                </div>

               {/* <div className="price">Enter about cost of your trip<input type="text" /></div>
                <hr />*/}

                <textarea value={body}  onChange={(e)=>{
                    setbody(e.target.value)
                }} type="text" cols={40} placeholder="Describe about your trip..."></textarea>

            </div>
        </div>
    )
}