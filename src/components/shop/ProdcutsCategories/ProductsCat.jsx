import React from 'react';
import './productCats.css';
import ProductImg1 from '../../../image/shop/WOMENS-88-I4ORBIT-T-SHIRT.png';
import ProductImg2 from './../../../image/shop/SpaceX_Bottle_Front.png';
import ProductImg3 from './../../../image/shop/UNISEX_DRAGON_ZIPPER.png';
import Button from './../../button/Button';

const ProductsCat = () => {
    return (
        <>
            <section className="productsCat">
                <div className="row">
                    <div className="col-4">
                        <div className="productCatWrapper">
                            <div className="productImg">
                                <img src={ProductImg1} alt="prodcuts image" />
                            </div>
                            <div className="productContent">
                                <h1>WOMEN'S</h1>

                                <Button text="VIEW PRODUCTS" background="#fff" textColor="black" />

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="productCatWrapper">
                            <div className="productImg">
                                <img src={ProductImg3} alt="prodcuts image" />
                            </div>
                            <div className="productContent">
                                <h1>MEN'S</h1>
                                <Button text="VIEW PRODUCTS" background="#fff" textColor="black" />

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="productCatWrapper border-bottom-none">
                            <div className="productImg">
                                <img src={ProductImg2} alt="prodcuts image" />
                            </div>
                            <div className="productContent">
                                <h1>ACCESSORIES</h1>

                                <Button text="VIEW PRODUCTS" background="#fff" textColor="black" />


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsCat
