import React from 'react';
import './falconInfo.css';
import falconDigramImg from '../../../image/web/spacex-falcon-9.png';

const FalconInfo = () => {
    return (
        <>
            <div className="falconInfoWrapper">
                <div className="container">
                    <div className="falconInfoLeft falconInfoLeftBg">
                        <p>
                        Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.
                         Falcon 9 is the world’s 
                        first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
                        </p>
                    </div>
                    <div className="falconInfoRight">  
                        <img src={falconDigramImg} alt="img" />    
                    </div>
                </div>
            </div>
        </>

      
    )
}

export default FalconInfo;

