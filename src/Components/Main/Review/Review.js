import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideNav from '../SideNav/SideNav';
import './Review.css';




const Review = () => {

    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { from } = { from: { pathname: "/" } };

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:9000/addAReview',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(success =>{
            if (success) {
                alert('Review added successfully...');
                history.replace(from)
            }
        })


    };

    return (
        <div className=" row">
            <div className="col-md-2 text">
               <SideNav></SideNav>
            </div>
            <div className="col-md-10 mt-4">
                <p>Order <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="input-one" name="name" placeholder="Your name" ref={register({ required: true })} />
                        <br/>
                        <input className="input" name="companyName" placeholder="Company's name, Designation" ref={register({ required: true })} />
                        <br/>
                        <input className={"input-detail"} type="text" name="description" placeholder="Description" ref={register({ required: true })}></input>
                        <br/>
                        <input className="btn btn-dark mt-2 px-5 ml-4" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;