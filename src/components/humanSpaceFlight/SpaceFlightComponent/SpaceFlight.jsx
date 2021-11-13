import React from 'react';
import './SpaceFlight.css';
import EarthImg from '../../../image/web/earth.jpg';
import Button from './../../button/Button';

const SpaceFlight = ({missionName, aboutMission, extraInfoAboutMission, MissionImg, flexDirection }) => {
    return (
        <>
            <div className="spaceFlightWrapper ">
             <div className="spaceFlightInnerWapper" style={{flexDirection : `${flexDirection} `}}>
                <div className="spaceFlightContent" >
   
                      <div className="missionInfo">
                          <span>MISSION</span>
                          <h3>{missionName}</h3>
        
                          <p>{aboutMission}</p>
                          <span>{extraInfoAboutMission}</span>
                          <Button text="EXPLORE" background="black" textColor="#fff" textAlign="left" margin="15px 0"/>
                      </div>
                    </div> 

                    <div className="spaceFlightImg">
                     <div className="missionImg" >
                         <img src={MissionImg} alt=""/>
                     </div>
                    </div>
             </div>
            </div>
      
        </>
    )
}

export default SpaceFlight
