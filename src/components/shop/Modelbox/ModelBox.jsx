import React, {useState} from 'react'
import Button from './../../button/Button';
import './ModelBox.css';
import modelImg from '../../../image/shop/Cap_StarlinkAdjustable.png';
import { useSelector } from 'react-redux';
import  currencyFormatter from 'currency-formatter';


const ModelBox = ({onClick}) => {
    const { product } = useSelector(state => state.MenProductReducer);
    console.log(product);
    return (
        <>
            <div className="modelBoxWrapper">
             <div className="modelBoxInnerWrapper">
                 <div className="modelBoxImg">
                     <img src={product.image} alt="" />
                 </div>
                 <div className="modelBoxDetails">
                 <div className="ModelColorDetails">
                         <span className="modelColorName"><span className="modelColorBox"></span>Black</span>
                     </div>
                     <div className="Modelprice">
                         <span>{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                     </div>
                    
                 </div>
              <Button text="SELECT THIS MODEL" background="black" textColor="#fff" borderColor="black" onClick={onClick}/>
             </div>
            </div>
        </>
    )

}
export default ModelBox
