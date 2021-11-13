import React from 'react'
import CommonHeader from './../components/commonheader/CommonHeader';
import spceFlightImg from '../image/web/spacehuman.jpg'
import FlightOffer from './../components/humanSpaceFlight/FlightOffer/FlightOffer';
import SpaceFlight from './../components/humanSpaceFlight/SpaceFlightComponent/SpaceFlight';
import EarthImg from './../image/web/earth.jpg';
import spaceStattion from "./../image/web/spaceStattion.jpg";
import moon23 from './../image/web/moon23.png';
import VerticalHeader from './../components/verticalHeader/VerticalHeader';
import Conact from '../components/contactUs/Contact';
import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';

const HumanSpaceFlight = () => {
    return (
        <>  
            <CommonHeader
                img={spceFlightImg}
                heading="HUMAN SPACEFLIGHT"
                paragraph="MAKING LIFE MULTIPLANETARY" 
            />
            <FlightOffer />

            <SpaceFlight
                missionName="EARTH ORBIT"
                aboutMission="EXPERIENCE THE BLUE PLANET FROM OVER"
                extraInfoAboutMission="300KM UP"
                MissionImg={EarthImg}
                flexDirection="row-reverse"
             
            />

            <SpaceFlight
                missionName="SPACE STATION"
                aboutMission="TRANSPORTING HUMANS TO THE ORBITING LABORATORY IN THE SKY"
                MissionImg={spaceStattion}
                flexDirection="row"
            />

            <SpaceFlight
                missionName="MOON"
                aboutMission="RETURNING HUMANS TO OUR LUNAR NEIGHBOR"
                MissionImg={moon23}
                flexDirection="row-reverse"
               
            />

            <VerticalHeader/>
            <Conact/>
             <Footer/>


        </>
    )
}

export default HumanSpaceFlight
