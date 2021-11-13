import React from 'react';
import './button.css';

const Button = ({text, onClick, background, textColor, borderColor, width, textAlign, margin}) =>{
    return(
        <>
         <div className="buttonWapper" style={{ textAlign : `${textAlign}`}} >
             <button style={{background : `${background}`, color :`${textColor}`, borderColor : `${borderColor}`, 
              width: `${width}`, margin: `${margin}`
            }} onClick={onClick}>{text}</button>
         </div>
        </>
    )
}

export default Button;