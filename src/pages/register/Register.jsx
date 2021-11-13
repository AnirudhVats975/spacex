import React from 'react'
import ShopNavbar from './../../components/shop/ShopNavbar/ShopNavbar';
import './Register.css';
import Button from './../../components/button/Button';
import { Link } from 'react-router-dom';
import ShopFooter from './../../components/shop/shopFooter/ShopFooter';

const Register = () => {
    return (
        <>
            <ShopNavbar/>
            <div className="accountWrapper">
              <div className="accountInnerWrapper">
                  <div className="AccountHeading">
                      <h3>REGISTER</h3>
                  </div>
                  <div className="AccountText">
                      <p>Please fill in the information below:</p>
                  </div>
                  <form action="">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="text" placeholder="Email" />
                        <input className="forgotPassword" type="password" placeholder="Password" />
                     <Button text="CREATE MY ACCOUNT" background="black" width="100%"/>
                  </form>
                  <div className="registerRoute">
                  <p>You have an account? <Link to="/account/login">Login </Link></p>
                  </div>
              </div>
            </div>
            <ShopFooter/>
        </>
         
    )
}

export default Register
