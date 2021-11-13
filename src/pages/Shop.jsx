import React from 'react'
import ShopNavbar from './../components/shop/ShopNavbar/ShopNavbar';
import ShopHeader from './../components/shop/shopHeader/ShopHeader';
import FeaturedProdcuts from './../components/shop/featuredProduct/FeaturedProdcuts';
import ProductsCat from './../components/shop/ProdcutsCategories/ProductsCat'
import ShopFooter from './../components/shop/shopFooter/ShopFooter';

const Shop = () => {
    return (
        <>
       
          <ShopNavbar/>
          <ShopHeader/>
          <FeaturedProdcuts/>
          <ProductsCat/>
          <ShopFooter/>
        </>
    )
}

export default Shop
