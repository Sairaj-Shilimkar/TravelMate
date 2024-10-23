import React from "react";
import Navbar from "./components/Navbar no login";
import Extra from "./components/extra";
import Review from "./components/reviews";
import Footer from "./components/footer"
import Places from "./components/places";



export default function Start(){
    return (
        <div className="q">
          <Navbar/>
          <br />
          
          <div style={{paddingTop:750}}>
            <Extra/>
          </div>
          <div><Places/>
          </div>
          
          <div >
            <Review/>
          </div>
          
          <div>
            <Footer/>
          </div>
        </div>
        

      
      );
}