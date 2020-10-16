import React from 'react';

const OrderDetails = ({placedOrders}) => {
    return (
        <div>
            {
                placedOrders.map(order => <div key={order._id} style={{float:'left'}} className="orders-sec">
                      <h3>{order.title} </h3>
                      <small>{order.message} </small>
                </div>)
            }
        </div>
    );
};

export default OrderDetails;