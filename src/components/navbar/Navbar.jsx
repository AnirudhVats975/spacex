import React, { useState, useEffect } from 'react';
import './navbar.css';
import brandLogo from '../../image/web/SpaceX-Logo.wine.png';
import SideToggle from './../sideToggle/SideToggle';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [sideToggle, setSideToggle] = useState(false);



    const sideToggleBtn = (e) => {
        setSideToggle(!sideToggle)
    }

    window.addEventListener('scroll', () => {
        setSideToggle(false)
    });











    return (
        <>
            <nav className="mainNav border-bottom-none">
                <div className="navbar">
                    <div className="navbarLeft">
                        <Link to="/"> <img src={brandLogo} alt="logo" /></Link>
                    </div>
                    <div className="navbarCenter">
                        <ul>
                            <li><Link to="/falcon9">FALCON 9</Link></li>
                            <li><Link to="/falcon9">FALCON HEAVY</Link></li>
                            <li><Link to="/falcon9">DRAGON</Link></li>
                            <li><Link to="/falcon9">STARSHIP</Link></li>
                            <li><Link to="/humanSpaceFlight">HUMAN SPACEFLIGHT</Link></li>


                        </ul>
                    </div>
                    <div className="navbarRight">
                        <ul>
                            <li className="shop"><Link to="/shop">SHOP</Link></li>
                            <li className="togglebtn"><button onClick={(e) => sideToggleBtn()}><i className="fas fa-bars"></i></button></li>
                        </ul>

                    </div>
                </div>
            </nav>
            {sideToggle && <SideToggle onClick={sideToggleBtn} />}

        </>
    )
}

export default Navbar
