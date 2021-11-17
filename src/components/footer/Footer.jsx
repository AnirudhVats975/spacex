import React, { useState } from 'react';
import './footer.css';

const Footer = () => {

     const currYear = new Date().getFullYear();
    return (
        <>
           <div className="footerWapper">
               <div className="container">
                   <div className="footerInnerWapper">
                   <div className="copyRight">
                       <span>SPACEX © {currYear}</span>
                   </div>
                   <div className="socialLink">
                    <ul>
                        <li><a href="">TWITTER</a></li>
                        <li><a href="">YOUTUBE</a></li>
                        <li><a href="">INSTAGRAM</a></li>
                        <li><a href="">LINKEDIN</a></li>
                       <li><a href="">PRIVACY POLICY</a></li>
                    </ul>
                   </div>
                   </div>
                  
               </div>
           </div>
        </>
    )
}

export default Footer
