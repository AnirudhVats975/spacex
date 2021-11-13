import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Accorden = ({heading, navLinkOne, navLinkTwo, navLinkThree , onClick}) => {
    const [show, setShow] = useState(false);

    const accordenHandler = () =>{
        setShow(!show)
    }

    return (
        <>
            <div className="row borderBottom">
                <button onClick={accordenHandler}>
                    <span className="accordenHeading">{heading}</span>
                    <span style={{cursor : "pointer"}}>{show ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}</span>
                </button>
                {show ? <div className="leftNavLinks">
                    <ul>
                        <li><Link to="/collections/mens">{navLinkOne}</Link></li>
                        <li><Link to="/collections/mens">{navLinkTwo}</Link></li>
                        <li><Link to="/collections/mens">{navLinkThree}</Link></li>
                    </ul>
                </div> : ""}
            </div>
        </>
    )
}

export default Accorden
