import {  faClipboardList, faCommentDots, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Logo from '../../../../images/logos/logo.png'
import './Orders.css'

const Orders = () => {

   const [loggedInUser] = useContext(UserContext);

    return (
        <div className="row">
            <div className="col-md-2 text">
               <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
               <Link to="/placeOrder"><p><FontAwesomeIcon icon={faShoppingCart} />   Order</p></Link>
               <p style={{color:"#32CD32"}}><FontAwesomeIcon icon={faClipboardList} />   Service list</p>
               <Link to="/Review"><p><FontAwesomeIcon icon={faCommentDots} />   Review</p></Link>
            </div>
            <div className="col-md-10 mt-4">
                <p>Order <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div style={{display:'flex'}} className="input-sec">
                  <div className="orders-sec">

                  </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;