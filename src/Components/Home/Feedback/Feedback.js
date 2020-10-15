import React from 'react';
import customerOne from '../../../images/customer-1.png';
import customerTwo from '../../../images/customer-2.png';
import customerThree from '../../../images/customer-3.png'

const Feedback = () => {

    const reviews=[
        {
            id:0,
            name:'Nash Patrick',
            position:'CEO, Manpol',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni?',
            photo:customerOne
        },
        {
            id:1,
            name:'Miriam Baron',
            position:'CEO, Manpol',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni?',
            photo:customerTwo
        },
        {
            id:2,
            name:'Bria Malone',
            position:'CEO, Manpol',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni?',
            photo:customerThree
        }
    ]
    return (
        <div className="container mt-5">
            <h2 style={{textAlign:'center',fontWeight:'bolder'}}>Clients <span style={{color:'#76ac57'}}>Feedback</span></h2>
            <div className="row d-flex justify-content-center mt-5">
                {
                reviews.map(review=><div key={review.id} style={{border:'1px solid gray'}} className="col-md-3 m-3 p-3">
                    <p>{review.photo} <strong>{review.name}</strong>  </p>
                    <small>{review.text} </small>
                </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;