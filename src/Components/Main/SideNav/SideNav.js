import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import {  faClipboardList, faCommentDots, faShoppingCart, faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const SideNav = () => {

    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(()=>{
        fetch('http://localhost:9000/isAdmin', {
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res =>res.json())
        .then(data => setIsAdmin(data));
    },[])



    return (
        <div>
            
            { isAdmin ? <div>
                <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
                <Link to="/service"><p><FontAwesomeIcon icon={faListAlt} />   Service list</p></Link>
                <Link to="/addServices"><p><FontAwesomeIcon icon={faPlus} />   Add service</p></Link>
                <Link to="/addAdmin"><p><FontAwesomeIcon icon={faUserPlus} />   Make admin</p></Link>
            </div> : <div>
                <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
                <Link to="/placeOrder"><p><FontAwesomeIcon icon={faShoppingCart} />   Order</p></Link>
                <Link to="/orders"><p><FontAwesomeIcon icon={faClipboardList} />   Service list</p></Link>
                <Link to="/Review"><p><FontAwesomeIcon icon={faCommentDots} />   Review</p></Link>
            </div> }
        </div>
    );
};

export default SideNav;