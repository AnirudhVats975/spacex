import React, {useEffect} from 'react';
import './launchInfo.css';
import CountUp, { useCountUp } from 'react-countup';

const LaunchInfo = () => {
   
    
    return (
        <>
            <div className="launchInfoWappper">
              <div className="launchInfoInnerWapper">
              <div className="totalLaunches">
                    <h2><CountUp end={200} duration={2}/></h2>
                    <p>TOTAL LAUNCHES</p>
                </div>
                <div className="totalLandings">
                <h2><CountUp end={85} duration={2}/></h2>
                    <p>TOTAL LANDINGS</p>
                </div>
                <div className="refalun">
                <h2><CountUp end={87} duration={2}/></h2>
                  <p>REFLOWN ROCKETS</p>
                </div>
              </div>
            </div>
        </>
    )
}

export default LaunchInfo
