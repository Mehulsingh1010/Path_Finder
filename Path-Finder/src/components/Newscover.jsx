/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../components/Newscover.scss";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
const Newscover = () => {       

    const clickhandler = ()=>{
        
        alert("You are now subscribed ! you will recieve all the updates now");

    }
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                {/* <span className="small-text">Newsletter</span> */}
                <span className="big-text">
                    Stay tuned for latest updates and sessions
                </span>
                <div className="form">
                    {/* <input type="text" placeholder="Email Address" /> */}
                    {/* <button  onClick={clickhandler}> Subscribe</button> */}
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Newscover