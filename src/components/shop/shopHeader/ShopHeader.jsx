import React from 'react';
import './shopHeader.css';
import HeaderImg  from '../../../image/shop/header.jpg';

const shopHeader = () => {
    return (
        <>
            <div className="shopHeaderWrapper">
                 <img src={HeaderImg} alt="header image" />
                 <div className="shopHeaderContent">
                     <h2>SHOP  SPACEX</h2>
                 </div>
            </div>
        </>
    )
}

export default shopHeader
