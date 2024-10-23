import React from "react";
import {RiCloseLine} from 'react-icons/ri'
import './modal.css'

export default function Modal(){
    return(
        
        <div className="darkBg" >
                    <div className="centered">
                    <div className="modal">
            <div className="modalHeader">
                <h4 className="heading">Confirm</h4>
            </div>
            <button className="closeBtn">
                <RiCloseLine></RiCloseLine>
            </button>

        <div className="modalContent">
            Are you sure to LogOut??
        </div>
        <div className="modalActions">
            <div className="actionsContainer">
                <button className="logOutBtn">LogOut</button>
                <button className="cancelBtn">Cancel</button>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}