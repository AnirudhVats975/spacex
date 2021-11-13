import React from 'react';
import './update.css';
import CommonHeader from '../../components/commonheader/CommonHeader';
import Crew1Launch from './../../image/web/Crew1Launch.jpg';
import {updateApi} from '../../data'
import Footer from './../../components/footer/Footer';


const Updates = () => {

    return (
        <>
            <CommonHeader
                img={Crew1Launch}
                paragraph="NOVEMBER 6, 2021"
                heading="CREW-3 MISSION"
            />

            <div className="updatesWrapper">
                <div className="updatesInnerWrapper">
                <div className="row">
                   {
                       updateApi.map((currElement)=>{
                           return(
                               <div key={currElement.id}>
                            <div className="updateContainer">
                               <div className="updatesImg">
                                   <img src={currElement.image} alt="" />
                                   </div>
                                   <div className="updateInfo">
                                       <p>{currElement.date}</p>
                                       <h3>{currElement.name}</h3>
                                       <a href="">{currElement.info} <i className="fas fa-angle-right"></i></a>
                                       </div> 
                            </div>
                               </div>
                           )
                       })
                   }
                   </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Updates
