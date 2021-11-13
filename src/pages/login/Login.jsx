import React from 'react'
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import ShopNavbar from './../../components/shop/ShopNavbar/ShopNavbar';
import './Login.css';
import ShopFooter from './../../components/shop/shopFooter/ShopFooter';

const Login = () => {
    return (
        <>
            <ShopNavbar/>
            <div className="accountWrapper">
              <div className="accountInnerWrapper">
                  <div className="AccountHeading">
                      <h3>LOGIN</h3>
                  </div>
                  <div className="AccountText">
                      <p>Please enter your e-mail and password:</p>
                  </div>
                  <form action="">
                        <input type="text" placeholder="Email" />
                        <input className="forgotPassword" type="password" placeholder="Password" />
                    <button className="forgotPasswordBtn">Forgot Password?</button>
                     <Button text="Login" background="black" width="100%"/>
                  </form>
                  <div className="registerRoute">
                  <p>Don't have an account? <Link to="/account/register">Create One</Link></p>
                  </div>
              </div>
            </div>
            <ShopFooter/>
        </>
    )
}

export default Login
