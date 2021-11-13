import React from 'react'
import './commonHeader.css';
import Navbar from './../navbar/Navbar';

const CommonHeader = ({ img, heading, paragraph, paraWidth, paraMargin }) => {
    return (
        <>
            <div className="commonHeaderWrapper">
                <img src={img} alt="" />
                <div className="CommonHeaderContent">
                    <h2>{heading}</h2>
                    <p style={{ width: `${paraWidth}`, margin: `${paraMargin}` }}>{paragraph}</p>

                </div>

            </div>
            <Navbar />
        </>
    )
}

export default CommonHeader
