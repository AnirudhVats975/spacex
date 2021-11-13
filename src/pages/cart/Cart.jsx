import React,{useState} from 'react'
import ShopNavbar from './../../components/shop/ShopNavbar/ShopNavbar';
import { useSelector, useDispatch } from "react-redux";
import './Cart.css';
import currencyFormatter from "currency-formatter";
import Button from './../../components/button/Button';

const Cart = () => {
    const { products, totalQuantities, totalPrice  } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState();
  
    return (

        <>
            <ShopNavbar />
            <div className="cartWrapper">
                <div className="container">
                    {products.length > 0 ? <>

                        <div className="ProductContainer">
                            <div className="mainHeadings">
                                <h5>CART</h5>
                            </div>

                            <div className="cartItemHeading">
                                <div className="row">
                                    <div className="col-6">PRODUCT</div>
                                    <div className="col-3">QUANTITY</div>
                                    <div className="col-3">TOTAL</div>
                                </div>
                            </div>

                            <div className="cartItemProduct">
                                {
                                    products.map((product) => {
                                        return (
                                            <>
                                                <div className="row borderBottom" key={product.id}>
                                                    <div className="col-6">
                                                        <div className="cartProductDetails">
                                                            <div className="row">
                                                                <div className="col-2">
                                                                    <div className="cartProductImg">
                                                                        <img src={product.image} alt="Product image" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-10">
                                                                    <div className="cartproductInfo">
                                                                        <div className="cartproductName">
                                                                            {product.name}
                                                                        </div>
                                                                        <div className="cartProductColor">
                                                                            {product.color}
                                                                        </div>
                                                                        <div className="cartProductPrice">
                                                                            {currencyFormatter.format(product.price, { code: 'USD' })}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-3">
                                                        <div className="cartProductQuantityInfo">
                                                            <div className="incDec">
                                                                <div className="incDecWrapper">
                                                                <span className="dec"  onClick={()=> dispatch({type : 'DEC', payload : product.id})}><i class="fas fa-minus"></i></span>  
                                                                    <span>{product.quantity}</span>
                                                                    <span className="inc" onClick={()=> dispatch({type : 'INC', payload : product.id})}><i class="fas fa-plus"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="remove">
                                                                <button onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>REMOVE</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="totalPrice">
                                                            {currencyFormatter.format(product.price, { code: 'USD' })}
                                                        </div>
                                                    </div>
                                                </div>


                                            </>
                                        )
                                    })
                                }
                            </div>

                            <div className="checkoutWrapper">
                                <div className="checkoutTotalPrice">
                                    <h5>Total : <br /> <span>  {currencyFormatter.format(totalPrice, { code: 'USD' })}</span></h5>
                                    <p>Shipping & taxes calculated at checkout CHECKOUT</p>
                                    <Button text="CHECKOUT" background="black" textAlign="right" />
                                </div>
                            </div>

                        </div>



                    </> : <div className="emptyCart">
                        <p>YOUR CART IS EMPTY</p>
                        <Button text="SHOP OUR PRODUCTS" background="black"  borderColor="black"/>
                    </div>

                    }
                </div>
            </div>
        </>
    )
}

export default Cart
