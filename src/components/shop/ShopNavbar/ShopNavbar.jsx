import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BrandLogo from '../../../image/web/SpaceX-Logo.wine.png';
import './shopNavbar.css';
import LeftToggle from './../leftToggleBar/LeftToggle';
import { useSelector } from 'react-redux';
import Search from './../Search/Search';


const ShopNavbar = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    const [show , setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false)
    

    const searchHandler = (e) =>{
        e.preventDefault();
        setShowSearch(!showSearch)  
    }

    const leftTogglehandle = () =>{
        setShow(!show)
    }

    if(show){
        document.body.classList.add('active-Model','active-overLayer'); 
      }else{
        document.body.classList.remove('active-Model' ,'active-overLayer'); 
    
      }
    return (
        <>
       
        <nav className="shopNav">  
             
       {showSearch ? <Search/> : "" }
        <div className="shopNavbar">
        <div className="toggleWraper">
               <button onClick={leftTogglehandle}><i className="fas fa-bars "></i></button>
            </div>
            
            <div className="brandName">
              <Link to="/"><img src={BrandLogo} alt="Brand Logo" /></Link>
            </div>
            <div className="shopLinks">
             <ul>
                 <li  className="Navlink"><Link to="/collections/mens">MENS</Link>
                  <ul className="dropDown">
                      <div>
                      <li><Link to="">T-Shirts</Link></li>
                      <li><Link to="">Outerwear</Link></li>
                      <li><Link to="">View All</Link></li>
                      </div>
                  </ul>
                 </li>
                 <li  className="Navlink"><Link to="/collections/mens">WOMENS</Link>
                 <ul className="dropDown">
                     <div>
                      <li><Link to="">T-Shirts</Link></li>
                      <li><Link to="">Outerwear</Link></li>
                      <li><Link to="">View All</Link></li>
                      </div>
                  </ul>
                 </li>
                 <li  className="Navlink"><Link to="/collections/mens">KIDS</Link>
                 <ul className="dropDown">
                     <div>
                      <li><Link to="">T-Shirts</Link></li>
                      <li><Link to="">Outerwear</Link></li>
                      <li><Link to="">View All</Link></li>
                  </div>
                  </ul>
                 </li>
                 <li  className="Navlink"><Link to="/collections/mens">ACCESSORIES</Link>
                 <ul className="dropDown Dheight">
                     <div>
                      <li><Link to="">View All</Link></li>
                  </div>
                  </ul>
                 </li>
                 <li  className="Navlink"><Link to="/collections/mens">PREMIUM</Link>
                 <ul className="dropDown Dheight">
                     <div>
                      <li><Link to="">View All</Link></li>
                  </div>
                  </ul>
                 </li>
             </ul>
            </div>
            <div className="accountLink">
             <div className="desktop">
             <ul>
                 <li><Link to="/account/login">ACCOUNT</Link></li>
                 <li><Link to="" onClick={searchHandler}>SEARCH</Link></li>
                 <li><Link to="/cart" className="cartStyle">CART <span>({totalQuantities})</span></Link></li>
             </ul>
             </div>

             <div className="mobile">
             <ul>
                 <li><Link to="" onClick={searchHandler}><i className="fas fa-search"></i></Link></li>
                 <li><Link to="/cart"><i className="fas fa-shopping-bag cartStyle"></i><span>({totalQuantities})</span></Link></li>
             </ul>
             </div>

            </div>
        </div>
        </nav>
      
        {show && <LeftToggle onClick={leftTogglehandle}/> }
        
        
        </>
    )
}

export default ShopNavbar
