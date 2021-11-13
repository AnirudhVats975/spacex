import React from 'react';
import './shopFooter.css';

const ShopFooter = () => {
    return (
        <>
        <footer className="shopFooter">
         <div className="container">
               <div className="row">
                   <div className="tcWrapper">
                       <ul>
                           <li><a href="">FAQs</a></li>
                           <li><a href="">Search</a></li>
                           <li><a href="">Privacy Policy</a></li>
                           <li><a href="">Terms & Conditions</a></li>
                       </ul>
                   </div>
               </div>

               <div className="row">
                   <span className="spacexStore">
                   © SPACEX STORE
                   </span>
               </div>
             </div>      
        </footer>  
        </>
    )
}

export default ShopFooter
