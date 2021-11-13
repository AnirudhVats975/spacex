import React from 'react';
import './FeaturedProdcuts.css';
import FeaturedImg1 from '../../../image/shop/UNISEX_STARSHIP_PULLOVER_BONE_BACK.png';
import FeaturedImg2 from '../../../image/shop/UNISEX_DRAGON_ZIPPER.png';

import Button from './../../button/Button';

const FeaturedProdcuts = () => {
    return (
        <>
            <div className="FeaturedProdcutsWrapper">
                <div className="container">
                <h4 className="mainHeading">FEATURED PRODUCTS</h4>
                    <div className="row no-wrap">
                       
                        <div className="col-6">
                            <div className="featuredWapper">
                                <div className="featuredImg">
                                <img src={FeaturedImg1} alt="" />
                                </div>
                                <div className="featuredDetails">
                                   <h5>UNISEX STARSHIP PULLOVER HOODIE</h5>
                                   <p>$65.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                        <div className="featuredWapper">
                                <div className="featuredImg">
                                <img src={FeaturedImg2} alt="" />
                                </div>
                                <div className="featuredDetails">
                                   <h5>UNISEX STARSHIP PULLOVER HOODIE</h5>
                                   <p>$65.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="buttonWapper">
                      <Button background="black" text="VIEW ALL FEATURED" borderColor="black"/>
                   </div>
                </div>
            </div>

        </>
    )
}

export default FeaturedProdcuts
