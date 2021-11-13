import React from 'react'
import './EnginOverVeiw.css';
import marlinEngine from '../../image/web/marlinEngine.jpg';

const EnginOverVeiw = ({ overVeiwImg, }) => {
    return (
        <>
            <div className="overVeiwWrapper">
                <div className="container">
                    <div className="overViewDetals">
                        <div className="enginName">
                            <p>ENGINES</p>
                            <h3>DRACO</h3>
                        </div>
                        <div className="engineCat">
                            <ul>
                                <li>DRACO</li>
                                <li>VACUUM</li>
                            </ul>
                        </div>

                        <div className="enginInfo">
                            <p>Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was
                                originally designed for recovery and reuse.</p>
                        </div>

                        <div className="engineTechnicalInfo">
                            <ul>
                                <li>PROPELLANT</li>
                                <li>LOX /  <span className="text-light">RP-1</span> </li>
                            </ul>

                            <ul>
                                <li>PROPELLANT</li>
                                <li>LOX /  <span className="text-light">RP-1</span> </li>

                            </ul>
                        </div>
                    </div>
                    <div className="OverviewImg">
                        <img src={marlinEngine} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnginOverVeiw
