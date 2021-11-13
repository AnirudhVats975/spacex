import React from 'react';
import CommonHeader from '../components/commonheader/CommonHeader';
import headerImg from '../image/web/falcon9.jpg';
import LaunchInfo from './../components/falcon9/launchInfo/LaunchInfo';
import FalconInfo from './../components/falcon9/falconInfo/FalconInfo';
import EnginOverVeiw from './../components/EnginOverview/EnginOverVeiw';
import VerticalHeader from './../components/verticalHeader/VerticalHeader';
import Contact from './../components/contactUs/Contact';
import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';

const Falcon9 = () => {
    return (
        <>
          <CommonHeader
           img={headerImg}
           heading = "FALCON 9"
           paragraph= "FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT"
           />
           <LaunchInfo/>
           <FalconInfo/>
            <EnginOverVeiw/>
            <VerticalHeader/>
            <Contact/>
            <Footer/>

        </>
    )
}

export default Falcon9
