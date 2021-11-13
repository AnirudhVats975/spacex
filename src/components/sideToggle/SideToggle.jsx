import React,{useState} from 'react';
import './sideToggle.css';
import { Link } from 'react-router-dom';

const SideToggle = ({onClick}) => {
       
    const [hide, setHide] = useState(true);

   

  
    return (
        <div>
            {hide && 
            <div className="sideToggleWappper">
                <div className="sideToggleInnerWapper">
                    <div className="closebtn">
                        <button onClick={onClick}><i className="fas fa-times"></i></button>
                    </div>
                    <div className="navLink">
                        <ul>
                        <div className="tableScreen">
                             <li><Link to="/falcon9">FALCON 9</Link></li>
                            <li><Link to="/falcon9">FALCON HEAVY</Link></li>
                            <li><Link to="/falcon9">DRAGON</Link></li>
                            <li><Link to="/humanSpaceFlight">STARSHIP</Link></li>
                            <li><Link to="/humanSpaceFlight">HUMAN SPACEFLIGHT</Link></li>      
                            </div>
                            <li><Link to="/humanSpaceFlight">MISSION</Link></li>
                            <li><Link to="/updates">LAUNCHES</Link></li>
                            <li><Link to="">CAREERS</Link></li>
                            <li><Link to="/updates">UPDATES</Link></li>
                            <li><Link to="/shop">SHOP</Link></li>
                           

                        </ul>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SideToggle
