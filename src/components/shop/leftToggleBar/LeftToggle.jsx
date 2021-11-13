import React, {useState} from 'react';
import './Lefttoggle.css';
import { Link } from 'react-router-dom';
import { LeftToggleData } from './../../../data';
import Accorden from './Accorden';



const LeftToggle = ({onClick}) => {
    const [data, setData] = useState(LeftToggleData);
    const [show , setShow] = useState(true);
    
 


    return (
        <>

        {show && 
            <div className="leftToggleWrapper">
                <div className="leftToggleInnerWrapper">
                    <div className="leftToggleClose">
                        <button style={{cursor : "pointer"}} onClick={onClick}><i className="fas fa-times"></i></button>
                    </div>
                    <div className="lefttoggleContent">
                        <ul>
                          {
                              data.map((currData)=>{
                                  
                                  return <div key={currData.id}><Accorden {...currData}/></div>
                              })
                          } 
                        </ul>                      
                    </div>
                </div>
            </div> }

           
        </>
    )
}

export default LeftToggle
