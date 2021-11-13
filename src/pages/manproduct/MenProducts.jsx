import React from 'react'
import ShopNavbar from '../../components/shop/ShopNavbar/ShopNavbar';
import {useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import './menProdcuts.css';
import { Link } from 'react-router-dom';


const MenProducts = () => {
  const {Products} = useSelector(state => state.MenProductReducer);
    return (
        <>
       <ShopNavbar/>
       <div className="menProductWrapper">
          <div className="container">
              <h3 className="mainHeading">MENS</h3>
              <div className="row">
                {
                Products.map((product)=>{
                    return(
                        <>
                        <div className="col-3" key={product.id}>
                        <div className="MenProduct">
                            <div className="menProductImg">
                                <Link to={`/collections/mens/product/${product.id}`}><img src={product.image} alt="product image" /></Link>
                            </div>
                          <div className="menProductName">
                              {product.name}
                          </div>

                          <div className="menProductPrice">
                          <span>{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                          </div>
                        </div>
                        </div>
                        </>
                    )
                })
                }
              </div>
          </div>
       </div>
        </>
    )
}

export default MenProducts
