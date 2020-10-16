import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const Feedback = () => {

    const[loggedInUser] = useContext(UserContext);
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://boiling-oasis-63976.herokuapp.com/reviews',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify()
        })
        .then(res =>res.json())
        .then(data => setReviews(data) )
   },[])


   
    return (
        <div className="container mt-5">
            <h2 style={{textAlign:'center',fontWeight:'bolder'}}>Clients <span style={{color:'#76ac57'}}>Feedback</span></h2>
            <div className="row d-flex justify-content-center mt-5">
                {
                reviews.map(review=><div key={review.id} style={{border:'1px solid gray', borderRadius:'4px'}} className="col-md-3 m-3 p-3">
                    <p> <img src={loggedInUser.photo} alt=""/> <strong>{review.name}</strong>  </p>
                    <small>{review.description} </small>
                </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;