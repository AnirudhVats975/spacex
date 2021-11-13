import React from 'react'
import Button from '../button/Button';
import './Contact.css';

const Contact = () => {
    return (
        <>
        <div className="contactWrapper">
           <div className="contactInnerWrapper">
               <p>For inquiries about our private passenger program, contact <strong>sales@spacex.com</strong></p>
               <Button text="CONTACT US"  margin="15px 0"/>
           </div>
        </div>
        </>
    )
}

export default Contact
