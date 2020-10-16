import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import SideNav from '../../SideNav/SideNav';
import OrderDetails from '../OrderDetails/OrderDetails';
import './Orders.css'

const Orders = () => {

   const [loggedInUser] = useContext(UserContext);
   const [placedOrders, setPlacedOrders] = useState([]);

   console.log(placedOrders)

   useEffect(()=>{
        fetch('http://localhost:9000/orders?email='+loggedInUser.email,{
            method:'GET',
            headers:{
               'Content-Type': 'application/json',
               authorization : `Bearer ${sessionStorage.getItem('token')}`
           }
        })
        .then(res =>res.json())
        .then(data => setPlacedOrders(data) )
   },[])

   


    return (
        <div className="row">
            <div className="col-md-2 text">
                <SideNav></SideNav>
            </div>
            <div className="col-md-10 mt-4">
                <p>Order <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div style={{display:'inline-flex'}} className="input-sec">
                   <OrderDetails placedOrders={placedOrders}></OrderDetails>
                </div>
            </div>
        </div>
    );
};

export default Orders;