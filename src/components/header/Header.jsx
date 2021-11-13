import React from 'react';
import './header.css';
import headerBackground from '../../videos/header.mp4';
import Navbar from './../navbar/Navbar';
import Button from './../button/Button';

const Header = () => {

    const clickHandler = () => {
      console.log("click header")
    }
    return (
        <>
            <div className="headerWapper">
                <div className="videoContainer">
                    <video src={headerBackground} autoPlay muted loop></video>
                </div>
                <div className="headerContent">
                    <h2><span>COMPLETED MISSION</span><br />
                        DRAGON RETURNS TO <br/> EARTH</h2>
                        <p>Dragon completes world’s first all-civilian mission to orbit</p>
                        <Button text="REWATCH" onClick={clickHandler} textAlign="left"/>
                </div>
               <div className="navbarWapper">
               <Navbar/>
               </div>
              

            </div>
        </>
    )
}

export default Header
