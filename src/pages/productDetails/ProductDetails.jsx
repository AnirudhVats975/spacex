import React, { useEffect, useState } from 'react'
import ShopNavbar from './../../components/shop/ShopNavbar/ShopNavbar';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import './ProductDetails.css';
import Button from './../../components/button/Button';
import ModelBox from './../../components/shop/Modelbox/ModelBox';
import SizeList from './../../components/shop/SizeList/SizeList';


const ProductDetails = ({}) => {
  const [showModel, setShowModel] = useState(false);
  const [sizeSelector, setSizeSelector] = useState(false);

  const [quantity, setQunatity] = useState(1);
  const { id } = useParams();
  const { product } = useSelector(state => state.MenProductReducer);
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'MENPRODUCT', id: id });
  }, [id]);


  const decQuantity = () =>{
    if(quantity > 1){
      setQunatity(quantity - 1)
    }
  }

  const AddToCart = () =>{
    dispatch({type: 'ADD_TO_CART', payload: {product, quantity} });
  }

  // modelbox 
  const modelHandler = () =>{
    setShowModel(!showModel)
  
  }

  if(showModel){
    document.body.classList.add('active-Model','active-overLayer'); 
  }else{
    document.body.classList.remove('active-Model' ,'active-overLayer'); 

  }

  // sizeSelector 

  const SizeSeletorHandler = () =>{
    setSizeSelector(!sizeSelector);
  }

  return (
    <>
      < ShopNavbar />
      <div className="prodcutsDetailsWrapper">
       <div className="container">
         <div className="row">
           <div className="col-7">
             <div className="menProductDetailsImg">
               <img src={product.image} alt="" />
             </div>
           </div>
           <div className="col-5">
             <div className="menProductDetails">
               <div className="manProductDetailsHeading">
                 {product.name}
               </div>

               <div className="menproductDetailsPrice">
               {currencyFormatter.format(product.price, { code: 'USD' })}
               </div>

               <div className="menProductDetailsColor">
                 <div className="selectBox">
                   <button onClick={modelHandler}>
                   <span className="selcetBoxText">Color: Black</span>
                   <span><i className="fas fa-angle-down"></i></span>
                   </button>
                 </div>
               </div>

               <div className="menProductDeatilsSize">
               <div className="selectBox">
                   <button >
                   <span className="selcetBoxText">Size: S</span>
                   <span><i className="fas fa-angle-down"></i></span>
                   </button>
             
                 </div>
                 {SizeList}
               </div>
         
            

               <div className="menProductDetailsQuntity">
                 <span className="dec" onClick={decQuantity}><i className="fas fa-minus"></i></span>
                 <span className="quntity">{quantity}</span>
                 <span className="inc" onClick={()=> setQunatity(quantity+1) }><i class="fas fa-plus"></i></span>
               </div>

                <div className="manProductDetailsButton">
                <Button  onClick={AddToCart} background="black" text="ADD TO CART" borderColor="black" width="100%"/>
                </div>
             </div>
           </div>

         </div>
       </div>
      </div>
  {showModel && (<ModelBox onClick={modelHandler}/>)}
  
    </>
  )
}

export default ProductDetails
